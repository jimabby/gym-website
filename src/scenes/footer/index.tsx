import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Join our community and stay up-to-date with the latest fitness tips, workout plans, and nutrition advice!
          </p>
          <p>© EYOGYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bond">Links</h4>
          <p className="my-5">Facebook</p>
          <p className="my-5">Twitter</p>
          <p className="my-5">Instagram</p>
          <p></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bond">Contact Us</h4>
          <p className="my-5">Email: support@eyogym.com</p>
          <p>(+61) 517 965 5482</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
