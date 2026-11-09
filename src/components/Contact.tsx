import { profile } from '@/data/portfolio';
export function Contact() {
  return <footer id="contact" className="contact">
    <div className="contact-light" aria-hidden="true" />
    <div className="wrap contact-inner">
      <div className="contact-meta"><span>Get in touch</span><span>TFNS</span></div>
      <div className="contact-heading" data-reveal><h2>Contact me</h2><p>Punya proyek yang ingin dibahas?</p></div>
      <div className="contact-bottom">
        <address><a href={`mailto:${profile.email}`}>Email: {profile.email}</a><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: {profile.phone} <span aria-hidden="true">↗</span></a></address>
        <a className="back-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </div>
  </footer>;
}
