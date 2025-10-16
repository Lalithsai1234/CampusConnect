export type EventType = 'hackathon' | 'workshop' | 'competition'

export type Event = {
  id: string
  title: string
  type: EventType
  collegeId: string
  startAt: string // ISO
  endAt: string // ISO
  posterUrl?: string
  registerUrl?: string
  description?: string
  status?: 'upcoming' | 'past'
  registrationDetails?: string
}

// const now = new Date()
// Helper for generating demo dates (currently unused)
// const addDays = (n: number) => new Date(now.getTime() + n * 24 * 60 * 60 * 1000)

export const events: Event[] = [
  {
    id: 'e20',
    title: 'VJ Hackathon 2024',
    type: 'hackathon',
    collegeId: 'vvit',
    startAt: '2024-10-28',
    endAt: '2024-10-29',
    posterUrl: '/Colleges/VVIT university/VVIT --Hackthons.jpg',
    status: 'past',
    registrationDetails: 'Last day to register: October 11th, 2024. For queries: csi@vvit.in. No direct registration link.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e5',
    title: 'Smart Gitam Hackathon',
    type: 'hackathon',
    collegeId: 'gitam-st',
    startAt: '2023-04-03',
    endAt: '2023-04-04',
    posterUrl: '/Colleges/GITAM School of Technology/GITAM School of Technology Hackathon.jpeg',
    status: 'past',
    registrationDetails: 'QR code with instruction "SCAN THE QR TO REGESTER." No direct link.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e4',
    title: 'Cognitive X Gen AI Hackathon',
    type: 'hackathon',
    collegeId: 'gvp-vizag',
    startAt: '2025-08-01',
    endAt: '2025-08-02',
    posterUrl: '/Colleges/Gayatri Vidya Parishad College of Engineering (GVP), Visakhapatnam/Gayatri Vidya Parishad College of Engineering (GVP), Visakhapatnam Hackathon.jpg',
    status: 'past',
    registrationDetails: 'No direct registration link; social media handles (@csi_gvpce) for info.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e9',
    title: 'IEEE Techsangam 2025',
    type: 'hackathon',
    collegeId: 'lakireddy-bali',
    startAt: '',
    endAt: '',
    posterUrl: '/Colleges/Lakireddy Bali Reddy College of Engineering/Lakireddy Bali Reddy College of Engineering--Hackthons.png',
    status: 'upcoming',
    registrationDetails: 'QR code with instruction "SCAN TO STAY UPDATED" for future info.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e6',
    title: 'Eye Innovation Hackathon 2024',
    type: 'hackathon',
    collegeId: 'iit-tirupati',
    startAt: '2024-08-23',
    endAt: '2024-08-24',
    posterUrl: '/Colleges/Indian Institute of Technology (IIT), Tirupati/Indian Institute of Technology (IIT), Tirupati--Hackthon.png',
    status: 'past',
    registrationDetails: 'QR code for registration and more details; contact: cm_csr@iittp.ac.in.',
    registerUrl: 'mailto:cm_csr@iittp.ac.in' // Email contact for registration
  },
  {
    id: 'e8',
    title: 'NASA Space Application Challenge Hackathon',
    type: 'hackathon',
    collegeId: 'klu',
    startAt: '2018-08-30',
    endAt: '2018-08-30',
    posterUrl: '/Colleges/KL university/KLU hackathon poster--Hackton.png',
    status: 'past',
    registrationDetails: 'Contact: 9666366681, BHARGAVT17@GMAIL.COM.',
    registerUrl: 'mailto:BHARGAVT17@GMAIL.COM' // Email contact for registration
  },
  {
    id: 'e2',
    title: 'Smart India Hackathon 2022',
    type: 'hackathon',
    collegeId: 'anits-vizag',
    startAt: '2022-08-25',
    endAt: '2022-08-26',
    posterUrl: '/Colleges/Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam/Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam Hackathon.png',
    status: 'past',
    registrationDetails: 'Congratulatory poster for winners; no registration info.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e7',
    title: 'Torque 2k15',
    type: 'hackathon',
    collegeId: 'jntu-kakinada',
    startAt: '2015-02-21',
    endAt: '2015-02-22',
    posterUrl: '/Colleges/JNTU College of Engineering, Kakinada/JNTU College of Engineering, Kakinada Hackathon.png',
    status: 'past',
    registrationDetails: 'Registration: www.torque2k15.com (closed Feb 10, 2015).',
    registerUrl: 'http://www.torque2k15.com' // Original website (may not work)
  },
  {
    id: 'e1',
    title: 'Hackap Agritech Hackathon',
    type: 'hackathon',
    collegeId: 'andhra-university',
    startAt: '2025-09-23',
    endAt: '2025-09-24',
    posterUrl: '/Colleges/Andhra university/andhra university hackathon.png',
    status: 'past',
    registrationDetails: 'QR code with instruction "Scan and Register." No direct link.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e3',
    title: 'Project Expo 2k25',
    type: 'hackathon',
    collegeId: 'dvr-mic',
    startAt: '2025-09-15',
    endAt: '2025-09-15',
    posterUrl: '/Colleges/DVR Dr.Hs MIC COLLEGE OF TECHNOLOGY , Kanchikacherla/DVR & Dr.Hs MIC COLLEGE OF TECHNOLOGY--Hackerthon.jpg',
    status: 'upcoming',
    registrationDetails: 'QR code with instruction "SCAN ME" to register.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e11',
    title: 'Piston Cup 2025',
    type: 'hackathon',
    collegeId: 'vignan-it',
    startAt: '2025-09-09',
    endAt: '2025-09-10',
    posterUrl: "/Colleges/vignan's institute of information technology , Duvvada/vignan's institute of information technology , Duvvada--Hackthons.jpg",
    status: 'upcoming',
    registrationDetails: 'Last date for registration: September 7th, 2025. QR code for registration (now closed).',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e12',
    title: '2 Day Bootcamp + 32 hour Hackathon on Fullstack Webdevelopment',
    type: 'hackathon',
    collegeId: 'pscmr',
    startAt: '2022-11-21',
    endAt: '2022-11-24',
    posterUrl: 'Colleges/PSCMR College of Engineering and Technology/PSCMR College of Engineering and Technology--Hackthons.jpg',
    status: 'past',
    registrationDetails: 'Low resolution image; no visible registration link or QR code.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e13',
    title: 'Drone Fusion - A National-Level 24-Hour Drone Hackathon 2025',
    type: 'hackathon',
    collegeId: 'velagapudi',
    startAt: '2025-04-03',
    endAt: '2025-04-04',
    posterUrl: '/Colleges/Velagapudi Ramakrishna Siddhartha Engineering College/Velagapudi Ramakrishna Siddhartha Engineering College--Hackthons.png',
    status: 'past',
    registrationDetails: 'QR code for registration.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e14',
    title: 'National Level SBGSC Internal Hackathon 2023',
    type: 'hackathon',
    collegeId: 'seshadri-rao',
    startAt: '',
    endAt: '',
    posterUrl: '/Colleges/Seshadri Rao Gudlavalleru Engineering College/Seshadri Rao Gudlavalleru Engineering College--Hackthons.png',
    status: 'past',
    registrationDetails: 'Last date for registration: 31/09/2023. QR code for registration.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e15',
    title: 'MSME Idea Hackathon 5.0',
    type: 'hackathon',
    collegeId: 'svce',
    startAt: '',
    endAt: '',
    posterUrl: 'Colleges/Sri Venkateswara College of Engineering & Technology/Sri Venkateswara College of Engineering & Technology Hackathon.jpeg',
    status: 'past',
    registrationDetails: 'Last date for registration: July 14th, 2025. QR code to "SCAN For Registration".',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e16',
    title: 'Audvikash',
    type: 'hackathon',
    collegeId: 'rvr-jc',
    startAt: '2023-12-07',
    endAt: '2023-12-07',
    posterUrl: '/Colleges/RVR & JC College of Engineering  , Elluru/RVR & JC College of Engineering  , Elluru--Hackthons.png',
    status: 'past',
    registrationDetails: 'Registration expired December 1st, 2023. QR code included. Websites unreadable.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e17',
    title: "Hackerrupt '24",
    type: 'hackathon',
    collegeId: 'svu',
    startAt: '2024-04-28',
    endAt: '2024-04-29',
    posterUrl: 'Colleges/Sri Venkateswara University College of Engineering/Sri Venkateswara University Hackathon.jpg',
    status: 'past',
    registrationDetails: 'Deadline for idea submission: April 23rd, 2024. Registration by abstract submission.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e18',
    title: 'Cyber Hackathon 2022 (VIT Chennai)',
    type: 'hackathon',
    collegeId: 'vignan',
    startAt: '2022-01-01',
    endAt: '2022-12-31',
    posterUrl: '/Colleges/Vignan university/VVIT Cyber-Hackathon.png',
    status: 'past',
    registrationDetails: 'No registration information available.',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwsVtwtXSuYcVcycLyJl_sCmm0e5ALLubziXXSM8tzMkLThg/viewform?fbzx=466031169961590405'
  },
  {
    id: 'e19',
    title: 'VJ Hackathon 2024 (Vallurupalli Nageswara Rao Vignana Jyothi Institute)',
    type: 'hackathon',
    collegeId: 'vvit',
    startAt: '2024-10-28',
    endAt: '2024-10-29',
    posterUrl: 'Colleges/VVIT university/VVIT --Hackthons.jpg',
    status: 'past',
    registrationDetails: 'Last day to register: October 11th, 2024. Contact: csi@vvit.in.',
    registerUrl: 'mailto:csi@vvit.in' // Email contact for registration
  },
]

export function splitByTiming<T extends { startAt: string; endAt: string }>(items: T[]) {
  const now = Date.now()
  const present: T[] = []
  const upcoming: T[] = []
  const past: T[] = []
  for (const it of items) {
    const start = new Date(it.startAt).getTime()
    const end = new Date(it.endAt).getTime()
    if (start <= now && end >= now) present.push(it)
    else if (start > now) upcoming.push(it)
    else past.push(it)
  }
  return { present, upcoming, past }
}





