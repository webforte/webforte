
const companies = {
  leichtLuftig: {
    name: 'leicht+luftig',
    website: 'https://wwww.leicht-luftig.studio',
  },
  wildstyleNetwork: {
    name: 'Wildstyle Network',
    website: 'https://wwww.wildstyle-network.com',
  },
}

type Platform = 'Web' | 'iOS' | 'Android'

type Tool = 'React' | 'React Native' | 'Wordpress' | 'Firebase' | 'JavaScript'

type Reference = {
  id: string,
  year: string,
  title: string,
  subtitle: string,
  workDescription: string,
  url: string,
  skills: Array<Tool>,
  platform: Array<Platform>,
  via?: Object,
  image?: Object,
}

const imageHG = require('../../images/work/hansundgretel.png')
const imageTH = require('../../images/work/thomas-henry.jpg')
const image20s = require('../../images/work/20squares.png')
const imageSGS = require('../../images/work/so-geht-saechsisch.png')
const imageVDD = require('../../images/work/visitdd.jpg')

const referencesData: Array<Reference> = [
  {
    id: '1',
    year: '2018',
    title: 'Hans & Gretel',
    subtitle:
      'A tool that support physicians in handling of child endangerment cases',
    workDescription:
      'We as a team planned, designed and build this app alongside a web app and informational website. I took care of the app development.',
    url: 'https://www.hansundgretel.help',
    skills: ['React Native', 'Firebase'],
    platform: ['iOS', 'Android'],
    via: companies.leichtLuftig,
    image: imageHG,
  },
  {
    id: '5',
    year: '2018',
    title: 'Visit Dresden',
    subtitle:
      'A place for people to share their favorite impressions of Dresden and surroundings. Offical image campaign for Dresden and Elbland.',
    workDescription:
      'This cross plattform app I build together with a team lets users upload their videos even faster. Also we gave the existing website a fresh look.',
    url: 'https://www.visitdd.de/',
    skills: ['React Native', 'Wordpress', 'JavaScript'],
    platform: ['iOS', 'Android', 'Web'],
    via: companies.wildstyleNetwork,
    image: imageVDD,
  },
  {
    id: '2',
    title: 'Thomas Henry',
    year: '2017',
    subtitle: 'Multilangual corporate website',
    workDescription:
      "Accompanying Thomas Henry's fresh corporate design, this web presence was build by a team in which I was responsible for Wordpress and React development",
    url: 'https://www.thomas-henry.de',
    skills: ['Wordpress', 'React'],
    platform: ['Web'],
    via: companies.wildstyleNetwork,
    image: imageTH,
  },
  {
    id: '3',
    year: '2017',
    title: '20squares',
    subtitle: 'An easy to use app for creating photo books.',
    workDescription:
      'Realizing a real time architecture was a special challenge we mastered as a small team. My part consisted of building the cross plattform mobile app.',
    url:
      'https://itunes.apple.com/de/app/20squares-dein-fotobuch/id1147125245?mt=8',
    skills: ['React Native', 'Firebase'],
    platform: ['iOS', 'Android'],
    image: image20s,
  },
  {
    id: '4',
    year: '2016',
    title: '"So geht sächsisch." / "Simply Saxony"',
    subtitle: 'Multilangual image campaign of the free state of saxony.',
    workDescription: '',
    url: 'https://www.so-geht-saechsisch.de/',
    skills: ['Wordpress', 'React'],
    platform: ['Web'],
    via: companies.wildstyleNetwork,
    image: imageSGS,
  },
]

export default referencesData
