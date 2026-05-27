export const churchInfo = {
  name: 'Peniel Baptist Church',
  shortName: 'PBC Tulsa',
  address: '2140 South 67th E Ave, Tulsa, OK 74129',
  phone: '(918) 798-1163',
  mission:
    "Peniel Baptist Church is committed to reach and teach the Gospel with Jesus' love and compassion.",
  vision:
    'Peniel Baptist Church aims to build up a strong missional church for evangelism works to accomplish the Great Commission of Jesus Christ.',
  serviceTimes: [
    { label: 'Sunday Bible Study', time: '10:00 AM' },
    { label: 'Sunday Worship Service', time: '11:00 AM' },
    { label: 'Wednesday Night Prayer', time: '6:00 PM' }
  ],
  photos: [
    {
      src: '/images/pbc-mission.jpg',
      alt: 'Peniel Baptist Church congregation gathering',
      title: 'Gathered in Worship'
    },
    {
      src: '/images/pbc-bylaws.jpg',
      alt: 'Peniel Baptist Church members inside the sanctuary',
      title: 'Church Family'
    },
    {
      src: '/images/pbc-vision.jpg',
      alt: 'Peniel Baptist Church fellowship and worship moment',
      title: 'Serving Together'
    }
  ],
  links: {
    giving: 'https://pbctulsa.churchcenter.com/giving',
    bulletin: 'https://pbctulsa.churchcenter.com/pages/bulletin',
    calendar: 'https://pbctulsa.churchcenter.com/calendar',
    directory: 'https://pbctulsa.churchcenter.com/people',
    profile: 'https://pbctulsa.churchcenter.com/profile',
    mediaForm: 'https://pbctulsa.churchcenter.com/people/forms',
    store: 'https://peniel-baptist-church.printify.me',
    facebook: 'https://www.facebook.com/pbctulsa',
    instagram: 'https://www.instagram.com/pbctulsa',
    youtube: 'https://www.youtube.com/@pbctulsa',
    youtubeUploadsEmbed: 'https://www.youtube.com/embed?listType=user_uploads&list=pbctulsa',
    bible: 'https://www.bible.com'
  }
} as const;
