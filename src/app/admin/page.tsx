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
  MapPin,
  DollarSign,
  FileText,
  MessageSquare,
  Users,
  CheckCircle
} from 'lucide-react'

type FirestoreFiling = Omit<Filing, 'created_at' | 'file_upload'> & {
  created_at: { toDate: () => Date } | Date
}

interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  created_at: Date
  status: 'new' | 'replied' | 'resolved'
  replied: boolean
  notes: string
}

type FirestoreContact = Omit<ContactSubmission, 'created_at'> & {
  created_at: { toDate: () => Date } | Date
}

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [filings, setFilings] = useState<Filing[]>([])
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [selectedFiling, setSelectedFiling] = useState<Filing | null>(null)
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null)
  const [activeTab, setActiveTab] = useState<'filings' | 'contacts'>('filings')
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

  // Contact submissions listener
  useEffect(() => {
    if (!user) return

    const db = getDb()
    const q = query(collection(db, 'contact_submissions'), orderBy('created_at', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const contactsData = snapshot.docs.map((docSnapshot) => {
        const data = docSnapshot.data() as FirestoreContact
        return {
          ...data,
          id: docSnapshot.id,
          created_at: data.created_at && typeof data.created_at === 'object' && 'toDate' in data.created_at 
            ? data.created_at.toDate() 
            : new Date(data.created_at as unknown as string),
        } as ContactSubmission
      })
      setContacts(contactsData)
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

  const updateFilingStatus = async (filingId: string, newStatus: Filing['status']) => {
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

  const updateFilingNotes = async (filingId: string, notes: string) => {
    try {
      const db = getDb()
      await updateDoc(doc(db, 'filings', filingId), { notes })
    } catch (error) {
      console.error('Error updating notes:', error)
    }
  }

  const updateContactStatus = async (contactId: string, newStatus: ContactSubmission['status']) => {
    try {
      const db = getDb()
      await updateDoc(doc(db, 'contact_submissions', contactId), { 
        status: newStatus,
        replied: newStatus !== 'new'
      })
      if (selectedContact?.id === contactId) {
        setSelectedContact({ ...selectedContact, status: newStatus, replied: newStatus !== 'new' })
      }
    } catch (error) {
      console.error('Error updating contact status:', error)
    }
  }

  const updateContactNotes = async (contactId: string, notes: string) => {
    try {
      const db = getDb()
      await updateDoc(doc(db, 'contact_submissions', contactId), { notes })
    } catch (error) {
      console.error('Error updating notes:', error)
    }
  }

  const exportFilingsCSV = () => {
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

  const getFilingStatusColor = (status: Filing['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'paid': return 'bg-green-100 text-green-800'
      case 'in_progress': return 'bg-yellow-100 text-yellow-800'
      case 'submitted': return 'bg-purple-100 text-purple-800'
      case 'done': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getContactStatusColor = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'replied': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
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
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('filings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'filings' 
                ? 'bg-primary text-white' 
                : 'bg-white text-foreground hover:bg-gray-100'
            }`}
          >
            <Users className="w-5 h-5" />
            Filings ({filings.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'contacts' 
                ? 'bg-primary text-white' 
                : 'bg-white text-foreground hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Contact Messages ({contacts.length})
            {contacts.filter(c => c.status === 'new').length > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {contacts.filter(c => c.status === 'new').length}
              </span>
            )}
          </button>
        </div>

        {activeTab === 'filings' ? (
          <>
            {/* Filings Stats */}
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
              <h2 className="text-lg font-semibold text-foreground">NR6 Filings</h2>
              <button onClick={exportFilingsCSV} className="btn-secondary flex items-center gap-2">
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
                              onChange={(e) => updateFilingStatus(filing.id, e.target.value as Filing['status'])}
                              className={`text-xs font-medium px-2 py-1 rounded-full border-0 ${getFilingStatusColor(filing.status)}`}
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
          </>
        ) : (
          <>
            {/* Contact Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {(['new', 'replied', 'resolved'] as const).map((status) => (
                <div key={status} className="card text-center">
                  <p className="text-2xl font-bold text-primary">
                    {contacts.filter((c) => c.status === status).length}
                  </p>
                  <p className="text-sm text-muted capitalize">{status}</p>
                </div>
              ))}
            </div>

            {/* Contact Messages Table */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-foreground">Contact Messages</h2>
            </div>

            <div className="card overflow-hidden p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">From</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Subject</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-8 text-muted">
                          No contact messages yet
                        </td>
                      </tr>
                    ) : (
                      contacts.map((contact) => (
                        <tr key={contact.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm text-muted">
                            {contact.created_at.toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <p className="text-sm font-medium text-foreground">{contact.name}</p>
                            <p className="text-xs text-muted">{contact.email}</p>
                          </td>
                          <td className="py-3 px-4 text-sm text-foreground max-w-xs truncate">
                            {contact.subject}
                          </td>
                          <td className="py-3 px-4">
                            <select
                              value={contact.status}
                              onChange={(e) => updateContactStatus(contact.id, e.target.value as ContactSubmission['status'])}
                              className={`text-xs font-medium px-2 py-1 rounded-full border-0 ${getContactStatusColor(contact.status)}`}
                            >
                              <option value="new">New</option>
                              <option value="replied">Replied</option>
                              <option value="resolved">Resolved</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 flex items-center gap-2">
                            <button
                              onClick={() => setSelectedContact(contact)}
                              className="text-primary-light hover:text-primary"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                            <a
                              href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                              className="text-green-600 hover:text-green-700"
                              title="Reply via email"
                            >
                              <Mail className="w-5 h-5" />
                            </a>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Filing Detail Modal */}
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
                  <div className="col-span-2">
                    <p className="text-muted">Country of Residence</p>
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
                  onBlur={(e) => updateFilingNotes(selectedFiling.id, e.target.value)}
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

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Contact Message</h2>
              <button onClick={() => setSelectedContact(null)} className="p-2 hover:bg-gray-100 rounded-md">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* From */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{selectedContact.name}</p>
                  <a href={`mailto:${selectedContact.email}`} className="text-primary-light hover:text-primary">
                    {selectedContact.email}
                  </a>
                  <p className="text-sm text-muted mt-1">
                    {selectedContact.created_at.toLocaleDateString()} at {selectedContact.created_at.toLocaleTimeString()}
                  </p>
                </div>
              </div>

              {/* Subject */}
              <div>
                <p className="text-sm text-muted mb-1">Subject</p>
                <p className="font-semibold text-foreground">{selectedContact.subject}</p>
              </div>

              {/* Message */}
              <div>
                <p className="text-sm text-muted mb-2">Message</p>
                <div className="p-4 bg-gray-50 rounded-lg whitespace-pre-wrap text-foreground">
                  {selectedContact.message}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                  className="btn-primary flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Reply via Email
                </a>
                <button
                  onClick={() => updateContactStatus(selectedContact.id, 'resolved')}
                  className="btn-secondary flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Mark Resolved
                </button>
              </div>

              {/* Notes */}
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Internal Notes
                </h3>
                <textarea
                  className="input-field resize-none"
                  rows={3}
                  placeholder="Add internal notes..."
                  defaultValue={selectedContact.notes || ''}
                  onBlur={(e) => updateContactNotes(selectedContact.id, e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
