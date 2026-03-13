export default function Footer() {
  return (
    <footer className="border-t border-nova-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gradient-blue mb-4">
              NOVA
            </h3>
            <p className="text-nova-gray-400 text-sm leading-relaxed max-w-xs">
              The future of spatial computing. Designed in California. Engineered for the universe.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-nova-gray-300 mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-nova-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Technology</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-nova-gray-300 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-nova-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-nova-gray-300 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-nova-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-nova-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-nova-gray-400 text-sm">
            © 2026 NOVA Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social icons */}
            {["X", "GitHub", "LinkedIn", "YouTube"].map((name) => (
              <a
                key={name}
                href="#"
                className="text-nova-gray-400 hover:text-white text-sm transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
