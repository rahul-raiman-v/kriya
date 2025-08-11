import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../components/essentails/AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Innovation Hub', path: '/homepage-innovation-hub', icon: 'Home' },
    { name: 'Showcase', path: '/innovation-showcase', icon: 'Lightbulb' },
    { name: 'Community', path: '/community-hub', icon: 'Users' },
    { name: 'Events', path: '/events-opportunities', icon: 'Calendar' },
  ];

  const moreItems = [
    { name: 'About', path: '/about-our-innovation-story', icon: 'Info' },
    { name: 'Get Involved', path: '/get-involved-join-the-innovation', icon: 'UserPlus' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-innovation-hub" 
            className="flex items-center space-x-3 hover:opacity-80 transition-micro"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-purple rounded-lg flex items-center justify-center shadow-brand">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-slow"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-poppins font-bold text-foreground">
                BIT Tech Forum
              </h1>
              <p className="text-xs text-muted-foreground font-inter -mt-1">
                Innovation Lab
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium transition-brand ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-card'
                    : 'text-text-secondary hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-inter font-medium text-text-secondary hover:text-foreground hover:bg-muted transition-brand">
                <Icon name="MoreHorizontal" size={18} />
                <span>More</span>
                <Icon name="ChevronDown" size={16} className="group-hover:rotate-180 transition-brand" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-modal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-brand">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm font-inter hover:bg-muted transition-micro ${
                        isActivePath(item?.path)
                          ? 'text-primary font-medium' :'text-popover-foreground'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="left"
              className="font-poppins"
            >
              GitHub
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Rocket"
              iconPosition="left"
              className="bg-secondary hover:bg-secondary/90 font-poppins"
            >
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-micro"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-brand overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-micro ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-secondary hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="Github"
                iconPosition="left"
                className="font-poppins"
              >
                GitHub
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Rocket"
                iconPosition="left"
                className="bg-secondary hover:bg-secondary/90 font-poppins"
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;