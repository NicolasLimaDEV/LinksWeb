import { Content } from './styleLink'

export default function Links(){

  const urls = [
    {
      id: 1,
      name_url: 'Meu site',
      link_url: 'https://nicolaslimadev.vercel.app'
    },
    {
      id: 2,
      name_url: 'Linkedln',
      link_url: 'https://www.linkedin.com/in/nicolaslimadev/'
    },
    {
      id: 3,
      name_url: 'GitHub',
      link_url: 'https://github.com/NicolasLimaDEV'
    },
    {
      id: 4,
      name_url: 'Behance',
      link_url: 'https://www.behance.net/nicolaslima7'
    },
    {
      id: 5,
      name_url: 'Youtube',
      link_url: 'https://www.youtube.com/channel/UC5_OejoYarsFy2tGA52_etg'
    }
  ]

  return(
    <Content>
      {urls.map((url) => (
        <a target='_blank' href={url.link_url}>
          {url.name_url}
        </a>
      ))}
    </Content>
  )
}