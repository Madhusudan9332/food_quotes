
function Footer({FooterLinks}) {
  // State for managing links


  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {FooterLinks.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{section.title}</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {section.items.map((item, i) => (
                  <li key={i} className="mb-4">
                    <a href={item.href} className="hover:underline">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.</span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          {/* Icons and social links can be added here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
