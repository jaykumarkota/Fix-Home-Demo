export const customers = [{ id: 'c-01', name: 'Aarav Mehta', phone: '+91 98765 43210' }]

export const agents = [
  { id: 'a-ravi', name: 'Ravi Kumar', initials: 'RK', specialty: 'iPhone & Android', rating: 4.9, jobsToday: 2, availability: 'Available', area: 'Indiranagar' },
  { id: 'a-priya', name: 'Priya Shah', initials: 'PS', specialty: 'Apple Certified', rating: 4.8, jobsToday: 2, availability: 'Available', area: 'Koramangala' },
  { id: 'a-vikram', name: 'Vikram Rao', initials: 'VR', specialty: 'Android Specialist', rating: 4.7, jobsToday: 4, availability: 'On job', area: 'HSR Layout' },
]

export const mobileProducts = [
  { id: 'm-01', name: 'iPhone 15 Pro', brand: 'Apple', specs: '128 GB', condition: 'New', availability: 'Available', price: 'Rs. 1,24,900', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80', accent: 'bg-slate-100' },
  { id: 'm-02', name: 'Galaxy S24 Ultra', brand: 'Samsung', specs: '12 GB RAM · 256 GB', condition: 'New', availability: 'Available', price: 'Rs. 1,29,999', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80', accent: 'bg-amber-50' },
  { id: 'm-03', name: 'Pixel 8 Pro', brand: 'Google', specs: '12 GB RAM · 128 GB', condition: 'New', availability: 'Available', price: 'Rs. 1,06,999', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80', accent: 'bg-sky-50' },
]

export const issueOptions = ['Screen damage', 'Battery issue', 'Charging issue', 'Camera issue', 'Water damage', 'Other']

export const initialServiceRequests = [
  { id: 'SR-1021', customerId: 'c-01', customerName: 'Aarav Mehta', customerPhone: '+91 98765 43210', device: { brand: 'Apple', model: 'iPhone 14 Pro', imei: '' }, issue: { category: 'Screen damage', description: 'Cracked front glass after a drop.', images: [] }, address: { house: '204, Lake View Apartments', street: '12th Main Road', area: 'Indiranagar', city: 'Bengaluru', pincode: '560038', landmark: 'Near Metro Station' }, preferredDate: 'Today', preferredTime: '2:00 - 2:30 PM', status: 'ASSIGNED', assignedAgentId: 'a-ravi', assignedAgentName: 'Ravi Kumar', createdAt: 'Today, 10:16 AM', notes: '', completionDetails: null },
  { id: 'SR-1020', customerId: 'c-02', customerName: 'Nisha Kapoor', customerPhone: '+91 99887 76655', device: { brand: 'Samsung', model: 'Galaxy S23', imei: '' }, issue: { category: 'Battery issue', description: 'Battery drops below 20% in a few hours.', images: [] }, address: { house: '18B', street: '80 Feet Road', area: 'Koramangala', city: 'Bengaluru', pincode: '560034', landmark: '' }, preferredDate: 'Today', preferredTime: '4:00 - 4:30 PM', status: 'NEW', assignedAgentId: null, assignedAgentName: null, createdAt: 'Today, 9:42 AM', notes: '', completionDetails: null },
  { id: 'SR-1019', customerId: 'c-03', customerName: 'Karthik Iyer', customerPhone: '+91 88776 65544', device: { brand: 'OnePlus', model: 'OnePlus 11', imei: '' }, issue: { category: 'Charging issue', description: 'Cable needs to be held at an angle.', images: [] }, address: { house: '30', street: '19th Cross', area: 'HSR Layout', city: 'Bengaluru', pincode: '560102', landmark: '' }, preferredDate: 'Today', preferredTime: '12:30 - 1:00 PM', status: 'ON_THE_WAY', assignedAgentId: 'a-vikram', assignedAgentName: 'Vikram Rao', createdAt: 'Today, 8:20 AM', notes: '', completionDetails: null },
  { id: 'SR-1018', customerId: 'c-04', customerName: 'Sneha Verma', customerPhone: '+91 77665 54433', device: { brand: 'Apple', model: 'iPhone 13', imei: '' }, issue: { category: 'Camera issue', description: 'Rear camera is not focusing.', images: [] }, address: { house: '8', street: 'HAL 2nd Stage', area: 'Domlur', city: 'Bengaluru', pincode: '560071', landmark: '' }, preferredDate: 'Yesterday', preferredTime: '5:00 PM', status: 'COMPLETED', assignedAgentId: 'a-priya', assignedAgentName: 'Priya Shah', createdAt: 'Yesterday', notes: '', completionDetails: { workPerformed: 'Rear camera module replaced.', parts: 'Camera module', notes: 'Camera focus and stabilization tested.', finalAmount: '3499', images: [] } },
]
