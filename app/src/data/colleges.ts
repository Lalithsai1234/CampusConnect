export type College = {
  id: string
  name: string
  imageUrl?: string
  organizerUserId: string
  organizerPassword: string
}

export const colleges: College[] = [
  { id: 'andhra-university', name: 'Andhra university', imageUrl: '/Colleges/Andhra university/andhra university image.jpg', organizerUserId: 'andhra', organizerPassword: '123465798' },
  { id: 'anits-vizag', name: 'Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam', imageUrl: '/Colleges/Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam/Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam.png', organizerUserId: 'anil', organizerPassword: '123465798' },
  { id: 'dvr-mic', name: 'DVR Dr.Hs MIC COLLEGE OF TECHNOLOGY , Kanchikacherla', imageUrl: '/Colleges/DVR Dr.Hs MIC COLLEGE OF TECHNOLOGY , Kanchikacherla/DVR & Dr.Hs MIC COLLEGE OF TECHNOLOGY.png', organizerUserId: 'dvr', organizerPassword: '123465798' },
  { id: 'gvp-vizag', name: 'Gayatri Vidya Parishad College of Engineering (GVP), Visakhapatnam', imageUrl: '/Colleges/Gayatri Vidya Parishad College of Engineering (GVP), Visakhapatnam/Gayatri Vidya Parishad College of Engineering (GVP), Visakhapatnam.png', organizerUserId: 'gayatri', organizerPassword: '123465798' },
  { id: 'gitam-st', name: 'GITAM School of Technology', imageUrl: '/Colleges/GITAM School of Technology/gitam-institute-of-technology-visakhapatnam.jpg', organizerUserId: 'gitam', organizerPassword: '123465798' },
  { id: 'iit-tirupati', name: 'Indian Institute of Technology (IIT), Tirupati', imageUrl: '/Colleges/Indian Institute of Technology (IIT), Tirupati/Indian Institute of Technology (IIT), Tirupati.png', organizerUserId: 'indian', organizerPassword: '123465798' },
  { id: 'jntu-kakinada', name: 'JNTU College of Engineering, Kakinada', imageUrl: '/Colleges/JNTU College of Engineering, Kakinada/JNTU College of Engineering, Kakinada.webp', organizerUserId: 'jntu', organizerPassword: '123465798' },
  { id: 'klu', name: 'KL university', imageUrl: '/Colleges/KL university/KL university image.jpg', organizerUserId: 'kl', organizerPassword: '123465798' },
  { id: 'lakireddy-bali', name: 'Lakireddy Bali Reddy College of Engineering', imageUrl: '/Colleges/Lakireddy Bali Reddy College of Engineering/Lakireddy Bali Reddy College of Engineering.jpg', organizerUserId: 'lakireddy', organizerPassword: '123465798' },
  { id: 'nit-andhra', name: 'National Institute of Technology (NIT), Andhra Pradesh', imageUrl: '/Colleges/National Institute of Technology (NIT), Andhra Pradesh/National Institute of Technology (NIT), Andhra Pradesh —.webp', organizerUserId: 'national', organizerPassword: '123465798' },
  { id: 'pscmr', name: 'PSCMR College of Engineering and Technology', imageUrl: '/Colleges/PSCMR College of Engineering and Technology/PSCMR College of Engineering and Technology.png', organizerUserId: 'pscmr', organizerPassword: '123465798' },
  { id: 'rvr-jc', name: 'RVR & JC College of Engineering, Elluru', imageUrl: '/Colleges/RVR & JC College of Engineering  , Elluru/RVR & JC College of Engineering  , Elluru.jpg', organizerUserId: 'rvr', organizerPassword: '123465798' },
  { id: 'seshadri-rao', name: 'Seshadri Rao Gudlavalleru Engineering College', imageUrl: '/Colleges/Seshadri Rao Gudlavalleru Engineering College/Seshadri Rao Gudlavalleru Engineering College.jpg', organizerUserId: 'seshadri', organizerPassword: '123465798' },
  { id: 'svce', name: 'Sri Venkateswara College of Engineering & Technology', imageUrl: '/Colleges/Sri Venkateswara College of Engineering & Technology/Sri Venkateswara College of Engineering & Technology.avif', organizerUserId: 'sri', organizerPassword: '123465798' },
  { id: 'svu', name: 'Sri Venkateswara University College of Engineering', imageUrl: '/Colleges/Sri Venkateswara University College of Engineering/sri venkateswara university.png', organizerUserId: 'sri', organizerPassword: '123465798' },
  { id: 'velagapudi', name: 'Velagapudi Ramakrishna Siddhartha Engineering College', imageUrl: '/Colleges/Velagapudi Ramakrishna Siddhartha Engineering College/Velagapudi Ramakrishna Siddhartha Engineering College.jpg', organizerUserId: 'velagapudi', organizerPassword: '123465798' },
  { id: 'vit-ap', name: 'Vellore Institute of Technology (VIT-AP), Amaravati', imageUrl: '/Colleges/Vellore Institute of Technology (VIT-AP), Amaravati/Vellore Institute of Technology (VIT-AP), Amaravati.jpg', organizerUserId: 'vellore', organizerPassword: '123465798' },
  { id: 'vignan', name: 'Vignan university', imageUrl: '/Colleges/Vignan university/VVIT university.jpg', organizerUserId: 'vignan', organizerPassword: '123465798' },
  { id: 'vignan-it', name: "vignan's institute of information technology , Duvvada", imageUrl: "/Colleges/vignan's institute of information technology , Duvvada/vignan's institute of information technology , Duvvada.jpg", organizerUserId: 'vignan', organizerPassword: '123465798' },
  { id: 'vvit', name: 'VVIT university', imageUrl: '/Colleges/VVIT university/VVIT College.jpg', organizerUserId: 'vvit', organizerPassword: '123465798' },
]

export function organizerUsernameForCollege(collegeName: string): string {
  return collegeName.replace(/\s+/g, '')
}





