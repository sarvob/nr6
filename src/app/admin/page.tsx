'use client'

import { useState, useEffect } from 'react'
import { getAuthInstance, getDb } from '@/lib/firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore'
import { Filing } from '@/lib/types'
import { 
  LogOut, 
  RefreshCw, 
  Download, 
  Eye, 
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  FileText
} from 'lucide-react'

type FirestoreFiling = Omit<Filing, 'created_at' | 'file_upload'> & {
  created_at: { toDate: () => Date } | Date
}

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [filings, setFilings] = useState<Filing[]>([])
  const [selectedFiling, setSelectedFiling] = useState<Filing | null>(null)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  // Auth state listener
  useEffect(() => {
    const auth = getAuthInstance()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  // Filings listener
  useEffect(() => {
    if (!user) return

    const db = getDb()
    const q = query(collection(db, 'filings'), orderBy('created_at', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const filingsData = snapshot.docs.map((docSnapshot) => {
        const data = docSnapshot.data() as FirestoreFiling
        return {
          ...data,
          id: docSnapshot.id,
          created_at: data.created_at && typeof data.created_at === 'object' && 'toDate' in data.created_at 
            ? data.created_at.toDate() 
            : new Date(data.created_at as unknown as string),
        } as Filing
      })
      setFilings(filingsData)
    })

    return unsubscribe
  }, [user])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    try {
      const auth = getAuthInstance()
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    } catch {
      setLoginError('Invalid email or password')
    }
  }

  const handleLogout = async () => {
    const auth = getAuthInstance()
    await signOut(auth)
  }

  const updateStatus = async (filingId: string, newStatus: Filing['status']) => {
    try {
      const db = getDb()
      await updateDoc(doc(db, 'filings', filingId), { status: newStatus })
      if (selectedFiling?.id === filingId) {
        setSelectedFiling({ ...selectedFiling, status: newStatus })
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const updateNotes = async (filingId: string, notes: string) => {
    try {
      const db = getDb()
      await updateDoc(doc(db, 'filings', filingId), { notes })
    } catch (error) {
      console.error('Error updating notes:', error)
    }
  }

  const exportCSV = () => {
    const headers = ['Date', 'Name', 'Email', 'Property', 'Status', 'Gross', 'Expenses', 'Savings']
    const rows = filings.map((f) => [
      f.created_at.toLocaleDateString(),
      f.full_name,
      f.email,
      f.property_address,
      f.status,
      f.gross || 0,
      f.expenses_total || 0,
      f.estimated_savings || 0,
    ])

    const csvContent = [headers, ...rows].map((row) => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `nr6-filings-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const getStatusColor = (status: Filing['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'paid':
        return 'bg-green-100 text-green-800'
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'submitted':
        return 'bg-purple-100 text-purple-800'
      case 'done':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <RefreshCw className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  // Login Form
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="card max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-primary mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="input-field"
                required
              />
            </div>
            {loginError && <p className="text-red-600 text-sm">{loginError}</p>}
            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">NR6.ca Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-blue-100 text-sm">{user.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {(['new', 'paid', 'in_progress', 'submitted', 'done'] as const).map((status) => (
            <div key={status} className="card text-center">
              <p className="text-2xl font-bold text-primary">
                {filings.filter((f) => f.status === status).length}
              </p>
              <p className="text-sm text-muted capitalize">{status.replace('_', ' ')}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">Filings ({filings.length})</h2>
          <button onClick={exportCSV} className="btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Filings Table */}
        <div className="card overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Property</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Est. Savings</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filings.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-muted">
                      No filings yet
                    </td>
                  </tr>
                ) : (
                  filings.map((filing) => (
                    <tr key={filing.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-muted">
                        {filing.created_at.toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm font-medium text-foreground">{filing.full_name}</p>
                        <p className="text-xs text-muted">{filing.email}</p>
                      </td>
                      <td className="py-3 px-4 text-sm text-foreground max-w-xs truncate">
                        {filing.property_address}
                      </td>
                      <td className="py-3 px-4 text-sm font-medium text-green-600">
                        ${(filing.estimated_savings || 0).toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={filing.status}
                          onChange={(e) => updateStatus(filing.id, e.target.value as Filing['status'])}
                          className={`text-xs font-medium px-2 py-1 rounded-full border-0 ${getStatusColor(filing.status)}`}
                        >
                          <option value="new">New</option>
                          <option value="paid">Paid</option>
                          <option value="in_progress">In Progress</option>
                          <option value="submitted">Submitted</option>
                          <option value="done">Done</option>
                        </select>
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => setSelectedFiling(filing)}
                          className="text-primary-light hover:text-primary"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedFiling && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Filing Details</h2>
              <button onClick={() => setSelectedFiling(null)} className="p-2 hover:bg-gray-100 rounded-md">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Contact Information
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted">Name</p>
                    <p className="font-medium">{selectedFiling.full_name}</p>
                  </div>
                  <div>
                    <p className="text-muted">Email</p>
                    <p className="font-medium">{selectedFiling.email}</p>
                  </div>
                  <div>
                    <p className="text-muted">Phone</p>
                    <p className="font-medium">{selectedFiling.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted">Country</p>
                    <p className="font-medium">{selectedFiling.country_of_residence}</p>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Property Information
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="col-span-2">
                    <p className="text-muted">Address</p>
                    <p className="font-medium">{selectedFiling.property_address}</p>
                  </div>
                  <div>
                    <p className="text-muted">Ownership</p>
                    <p className="font-medium">{selectedFiling.ownership_percentage}%</p>
                  </div>
                  <div>
                    <p className="text-muted">Rental Type</p>
                    <p className="font-medium capitalize">{selectedFiling.rental_type?.replace('_', ' ')}</p>
                  </div>
                </div>
              </div>

              {/* Financial Info */}
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Financial Details
                </h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted">Monthly Rent</p>
                    <p className="font-medium">${selectedFiling.monthly_rent?.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted">Months Rented</p>
                    <p className="font-medium">{selectedFiling.months_rented}</p>
                  </div>
                  <div>
                    <p className="text-muted">Gross</p>
                    <p className="font-medium">${selectedFiling.gross?.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted">Mortgage Interest</p>
                    <p className="font-medium">${selectedFiling.mortgage_interest?.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted">Property Tax</p>
                    <p className="font-medium">${selectedFiling.property_tax?.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted">Other Expenses</p>
                    <p className="font-medium">${selectedFiling.other_expenses?.toLocaleString()}</p>
                  </div>
                  <div className="col-span-3 pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="text-muted">Total Expenses</span>
                      <span className="font-medium">${selectedFiling.expenses_total?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Estimated Savings</span>
                      <span className="font-bold">${selectedFiling.estimated_savings?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Internal Notes
                </h3>
                <textarea
                  className="input-field resize-none"
                  rows={4}
                  placeholder="Add internal notes..."
                  defaultValue={selectedFiling.notes || ''}
                  onBlur={(e) => updateNotes(selectedFiling.id, e.target.value)}
                />
              </div>

              {/* File Download */}
              {selectedFiling.file_url && (
                <div>
                  <a
                    href={selectedFiling.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Supporting Document
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
