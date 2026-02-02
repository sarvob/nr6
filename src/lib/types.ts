export interface FilingData {
  // Step 1 - Property Information
  property_address: string
  ownership_percentage: number
  rental_type: 'long_term' | 'short_term'
  first_rental_year: number

  // Step 2 - Rental Income
  monthly_rent: number
  months_rented: number
  property_manager_fee: number

  // Step 3 - Expenses
  mortgage_interest: number
  property_tax: number
  condo_fees: number
  repairs: number
  insurance: number
  other_expenses: number

  // Step 4 - Contact Information
  full_name: string
  email: string
  phone: string
  country_of_residence: string
  file_upload?: File | null
  checkbox_confirm: boolean

  // Calculated values
  gross?: number
  expenses_total?: number
  net?: number
  without_nr6?: number
  with_nr6?: number
  estimated_savings?: number
}

export interface Filing extends FilingData {
  id: string
  created_at: Date
  status: 'new' | 'paid' | 'in_progress' | 'submitted' | 'done'
  stripe_payment_id: string
  paid: boolean
  notes: string
  file_url?: string
}

export const initialFilingData: FilingData = {
  property_address: '',
  ownership_percentage: 100,
  rental_type: 'long_term',
  first_rental_year: new Date().getFullYear(),
  monthly_rent: 0,
  months_rented: 12,
  property_manager_fee: 0,
  mortgage_interest: 0,
  property_tax: 0,
  condo_fees: 0,
  repairs: 0,
  insurance: 0,
  other_expenses: 0,
  full_name: '',
  email: '',
  phone: '',
  country_of_residence: '',
  file_upload: null,
  checkbox_confirm: false,
}

export function calculateSavings(data: FilingData) {
  const gross = data.monthly_rent * data.months_rented
  const expenses_total = 
    data.mortgage_interest +
    data.property_tax +
    data.condo_fees +
    data.repairs +
    data.insurance +
    data.other_expenses +
    data.property_manager_fee
  const net = gross - expenses_total
  const without_nr6 = gross * 0.25
  const with_nr6 = Math.max(net, 0) * 0.25
  const estimated_savings = without_nr6 - with_nr6

  return {
    gross,
    expenses_total,
    net,
    without_nr6,
    with_nr6,
    estimated_savings,
  }
}
