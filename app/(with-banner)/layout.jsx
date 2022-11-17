export default function Layout ({ children }) {
  return (
    <div>
      <marquee style={{ backgroundColor: 'white', color: 'purple', fontWeight: 'bold' }} direction='right'>No te regales...</marquee>
      {children}
    </div>
  )
}
