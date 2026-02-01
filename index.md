<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thrive Lab - Advancing Human Potential</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* ===== CSS Variables for Thrive Lab Color Scheme ===== */
        :root {
            /* Primary Colors - YOUR COLORS */
            --tiger-orange: #E97A29;    /* Bright orange */
            --fern-green: #4F7942;      /* Earthy green */
            --white: #FFFFFF;           /* Pure white */
            
            /* Color Variations */
            --tiger-orange-light: #F5A15C;
            --tiger-orange-dark: #C1621D;
            --fern-green-light: #6B9C5A;
            --fern-green-dark: #3A5C30;
            
            /* Neutrals */
            --gray-50: #FAFAFA;
            --gray-100: #F5F5F5;
            --gray-200: #EEEEEE;
            --gray-300: #E0E0E0;
            --gray-400: #BDBDBD;
            --gray-500: #9E9E9E;
            --gray-600: #757575;
            --gray-700: #616161;
            --gray-800: #424242;
            --gray-900: #212121;
            
            /* Typography */
            --font-primary: 'Inter', sans-serif;
            --font-secondary: 'Merriweather', serif;
            
            /* Spacing */
            --space-xs: 0.5rem;
            --space-sm: 1rem;
            --space-md: 1.5rem;
            --space-lg: 2rem;
            --space-xl: 3rem;
            --space-xxl: 4rem;
            
            /* Border Radius */
            --radius-sm: 0.25rem;
            --radius-md: 0.5rem;
            --radius-lg: 1rem;
            --radius-xl: 1.5rem;
            
            /* Shadows */
            --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
            --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
            --shadow-orange: 0 4px 14px rgba(233, 122, 41, 0.3);
            --shadow-green: 0 4px 14px rgba(79, 121, 66, 0.3);
            
            /* Transitions */
            --transition-fast: 0.2s ease;
            --transition-normal: 0.3s ease;
            --transition-slow: 0.5s ease;
        }

        /* ===== Base Styles ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
            scroll-padding-top: 80px;
        }

        body {
            font-family: var(--font-primary);
            font-size: 16px;
            line-height: 1.6;
            color: var(--gray-800);
            background-color: var(--white);
            overflow-x: hidden;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--space-md);
        }

        .section {
            padding: var(--space-xxl) 0;
        }

        .section-title {
            font-family: var(--font-secondary);
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--fern-green);
            margin-bottom: var(--space-lg);
            text-align: center;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: var(--tiger-orange);
            border-radius: 2px;
        }

        .section-subtitle {
            font-size: 1.2rem;
            color: var(--gray-600);
            text-align: center;
            max-width: 800px;
            margin: 0 auto var(--space-xl);
            line-height: 1.7;
        }

        /* ===== Typography ===== */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 600;
            line-height: 1.3;
            color: var(--fern-green);
        }

        h1 {
            font-size: 3.5rem;
            font-weight: 700;
        }

        h2 {
            font-size: 2.5rem;
        }

        h3 {
            font-size: 1.8rem;
        }

        h4 {
            font-size: 1.4rem;
        }

        p {
            margin-bottom: var(--space-md);
        }

        a {
            color: var(--tiger-orange);
            text-decoration: none;
            transition: color var(--transition-fast);
        }

        a:hover {
            color: var(--tiger-orange-dark);
        }

        /* ===== Buttons ===== */
        .btn {
            display: inline-block;
            padding: 0.8rem 1.8rem;
            font-family: var(--font-primary);
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
            border-radius: var(--radius-md);
            border: none;
            cursor: pointer;
            transition: all var(--transition-normal);
            text-decoration: none;
        }

        .btn-primary {
            background-color: var(--tiger-orange);
            color: var(--white);
            box-shadow: var(--shadow-sm);
        }

        .btn-primary:hover {
            background-color: var(--tiger-orange-dark);
            color: var(--white);
            transform: translateY(-3px);
            box-shadow: var(--shadow-orange);
        }

        .btn-secondary {
            background-color: var(--fern-green);
            color: var(--white);
            box-shadow: var(--shadow-sm);
        }

        .btn-secondary:hover {
            background-color: var(--fern-green-dark);
            color: var(--white);
            transform: translateY(-3px);
            box-shadow: var(--shadow-green);
        }

        /* ===== Navigation ===== */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: var(--white);
            box-shadow: var(--shadow-sm);
            z-index: 1000;
            padding: var(--space-sm) 0;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--space-md);
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: var(--space-xs);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--fern-green);
            text-decoration: none;
        }

        .logo-icon {
            color: var(--tiger-orange);
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: var(--space-lg);
            align-items: center;
        }

        .nav-link {
            font-weight: 500;
            color: var(--gray-700);
            text-decoration: none;
            transition: color var(--transition-fast);
            position: relative;
        }

        .nav-link:hover {
            color: var(--tiger-orange);
        }

        .nav-link.active {
            color: var(--tiger-orange);
        }

        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--tiger-orange);
        }

        .nav-link.external {
            display: flex;
            align-items: center;
            gap: 5px;
            background-color: var(--gray-100);
            padding: 0.5rem 1rem;
            border-radius: var(--radius-md);
        }

        .nav-link.external:hover {
            background-color: var(--fern-green);
            color: var(--white);
        }

        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--fern-green);
            cursor: pointer;
            padding: 0.5rem;
        }

        /* ===== Hero Section ===== */
        .hero {
            background: linear-gradient(135deg, rgba(233, 122, 41, 0.1) 0%, rgba(79, 121, 66, 0.1) 100%);
            padding-top: 100px;
            padding-bottom: var(--space-xxl);
            margin-bottom: var(--space-xl);
        }

        .hero-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--space-md);
            gap: var(--space-xl);
        }

        .hero-content {
            flex: 1;
        }

        .hero-title {
            font-size: 3.5rem;
            color: var(--fern-green);
            margin-bottom: var(--space-md);
            line-height: 1.2;
        }

        .hero-subtitle {
            font-size: 1.3rem;
            color: var(--gray-700);
            margin-bottom: var(--space-lg);
            max-width: 600px;
        }

        .hero-tagline {
            margin-bottom: var(--space-xl);
        }

        .tagline-text {
            font-family: var(--font-secondary);
            font-size: 1.5rem;
            font-style: italic;
            color: var(--tiger-orange);
            border-left: 4px solid var(--fern-green);
            padding-left: var(--space-md);
        }

        .hero-buttons {
            display: flex;
            gap: var(--space-md);
            flex-wrap: wrap;
        }

        .hero-visual {
            flex: 0 0 300px;
        }

        .color-blocks {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
        }

        .color-block {
            height: 80px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
        }

        .color-block.tiger-orange {
            background-color: var(--tiger-orange);
        }

        .color-block.fern-green {
            background-color: var(--fern-green);
        }

        .color-block.white {
            background-color: var(--white);
            border: 2px solid var(--gray-200);
        }

        /* ===== About Section ===== */
        .about-section {
            background-color: var(--gray-50);
        }

        .about-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: var(--space-xl);
        }

        .about-text p {
            margin-bottom: var(--space-md);
            font-size: 1.1rem;
            line-height: 1.8;
        }

        .about-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-md);
        }

        .stat-card {
            background-color: var(--white);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            text-align: center;
            box-shadow: var(--shadow-md);
            border-top: 4px solid var(--tiger-orange);
            transition: transform var(--transition-normal);
        }

        .stat-card:hover {
            transform: translateY(-5px);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--fern-green);
            margin-bottom: var(--space-xs);
        }

        .stat-label {
            color: var(--gray-600);
            font-weight: 500;
        }

        /* ===== Research Section ===== */
        .research-section {
            background-color: var(--white);
        }

        .research-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: var(--space-lg);
            margin-top: var(--space-xl);
        }

        .research-card {
            background-color: var(--white);
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            box-shadow: var(--shadow-md);
            border-left: 5px solid var(--tiger-orange);
            transition: all var(--transition-normal);
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .research-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }

        .research-icon {
            font-size: 2.5rem;
            color: var(--fern-green);
            margin-bottom: var(--space-md);
        }

        .research-title {
            font-size: 1.5rem;
            margin-bottom: var(--space-md);
            color: var(--fern-green);
        }

        .research-desc {
            color: var(--gray-700);
            margin-bottom: var(--space-lg);
            flex-grow: 1;
        }

        .research-tags {
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-xs);
        }

        .tag {
            background-color: var(--tiger-orange-light);
            color: var(--tiger-orange-dark);
            padding: 0.3rem 0.8rem;
            border-radius: var(--radius-sm);
            font-size: 0.85rem;
            font-weight: 500;
        }

        /* ===== Team Section ===== */
        .team-section {
            background-color: var(--gray-50);
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: var(--space-lg);
            margin-top: var(--space-xl);
        }

        .team-card {
            background-color: var(--white);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-md);
            transition: all var(--transition-normal);
            display: flex;
            flex-direction: column;
        }

        .team-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-green);
        }

        .team-card.director-card {
            border: 2px solid var(--tiger-orange);
        }

        .team-photo {
            height: 250px;
            background: linear-gradient(135deg, var(--fern-green-light) 0%, var(--fern-green) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .photo-placeholder {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background-color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 5rem;
            color: var(--fern-green);
            position: relative;
        }

        .director-badge {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--tiger-orange);
            color: var(--white);
            padding: 0.5rem 1rem;
            border-radius: var(--radius-md);
            font-size: 0.9rem;
            font-weight: 600;
        }

        .team-info {
            padding: var(--space-lg);
            flex-grow: 1;
        }

        .team-name {
            color: var(--fern-green);
            margin-bottom: var(--space-xs);
        }

        .team-title {
            color: var(--tiger-orange);
            font-weight: 600;
            margin-bottom: var(--space-md);
            font-size: 1rem;
        }

        .team-bio {
            color: var(--gray-700);
            margin-bottom: var(--space-md);
            line-height: 1.7;
        }

        .team-links {
            display: flex;
            gap: var(--space-sm);
        }

        .team-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background-color: var(--gray-100);
            border-radius: 50%;
            color: var(--fern-green);
            transition: all var(--transition-fast);
        }

        .team-link:hover {
            background-color: var(--fern-green);
            color: var(--white);
            transform: scale(1.1);
        }

        .team-note {
            margin-top: var(--space-xl);
            padding: var(--space-lg);
            background-color: var(--fern-green-light);
            color: var(--white);
            border-radius: var(--radius-lg);
            text-align: center;
        }

        .team-note a {
            color: var(--white);
            text-decoration: underline;
            font-weight: 600;
        }

        /* ===== Publications Section ===== */
        .publications-section {
            background-color: var(--white);
        }

        .publications-controls {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: var(--space-sm);
            margin-bottom: var(--space-xl);
        }

        .filter-btn {
            padding: 0.6rem 1.5rem;
            background-color: var(--gray-100);
            border: none;
            border-radius: var(--radius-md);
            font-weight: 500;
            color: var(--gray-700);
            cursor: pointer;
            transition: all var(--transition-fast);
        }

        .filter-btn:hover {
            background-color: var(--gray-200);
        }

        .filter-btn.active {
            background-color: var(--tiger-orange);
            color: var(--white);
        }

        .publications-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: var(--space-lg);
        }

        .publication-card {
            background-color: var(--white);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            box-shadow: var(--shadow-md);
            border-left: 5px solid var(--fern-green);
            transition: transform var(--transition-normal);
            position: relative;
        }

        .publication-card:hover {
            transform: translateY(-5px);
        }

        .pub-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background-color: var(--fern-green);
            color: var(--white);
            padding: 0.3rem 0.8rem;
            border-radius: var(--radius-sm);
            font-size: 0.8rem;
            font-weight: 600;
        }

        .pub-title {
            font-size: 1.2rem;
            color: var(--fern-green);
            margin-bottom: var(--space-sm);
            padding-right: 80px;
        }

        .pub-authors {
            color: var(--gray-700);
            font-size: 0.95rem;
            margin-bottom: var(--space-xs);
        }

        .pub-journal {
            color: var(--tiger-orange);
            font-weight: 500;
            margin-bottom: var(--space-md);
            font-size: 0.9rem;
        }

        .pub-links {
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-md);
        }

        .pub-link {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-size: 0.9rem;
            color: var(--fern-green);
            font-weight: 500;
        }

        .pub-link:hover {
            color: var(--tiger-orange);
        }

        .publications-footer {
            margin-top: var(--space-xl);
            text-align: center;
        }

        .pub-note {
            margin-top: var(--space-md);
            color: var(--gray-600);
        }

        /* ===== Join Us Section ===== */
        .join-section {
            background-color: var(--gray-50);
        }

        .opportunities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--space-lg);
            margin-bottom: var(--space-xl);
        }

        .opportunity-card {
            background-color: var(--white);
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            box-shadow: var(--shadow-md);
            display: flex;
            flex-direction: column;
            height: 100%;
            border-top: 5px solid var(--fern-green);
        }

        .opportunity-title {
            color: var(--fern-green);
            margin-bottom: var(--space-md);
        }

        .opportunity-desc {
            color: var(--gray-700);
            margin-bottom: var(--space-lg);
            flex-grow: 1;
        }

        .opportunity-list {
            list-style: none;
            margin-bottom: var(--space-lg);
        }

        .opportunity-list li {
            margin-bottom: var(--space-sm);
            display: flex;
            align-items: flex-start;
            gap: var(--space-xs);
        }

        .opportunity-list i {
            color: var(--fern-green);
            margin-top: 3px;
        }

        .lab-culture {
            background-color: var(--white);
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            box-shadow: var(--shadow-md);
        }

        .lab-culture h3 {
            text-align: center;
            margin-bottom: var(--space-lg);
        }

        .lab-culture > p {
            text-align: center;
            max-width: 800px;
            margin: 0 auto var(--space-xl);
            color: var(--gray-700);
        }

        .culture-values {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--space-lg);
        }

        .value-item {
            text-align: center;
            padding: var(--space-md);
        }

        .value-item i {
            font-size: 2.5rem;
            color: var(--tiger-orange);
            margin-bottom: var(--space-sm);
        }

        .value-item h4 {
            color: var(--fern-green);
            margin-bottom: var(--space-xs);
        }

        .value-item p {
            color: var(--gray-700);
            font-size: 0.95rem;
        }

        /* ===== Footer ===== */
        .footer {
            background-color: var(--fern-green);
            color: var(--white);
            padding: var(--space-xxl) 0 var(--space-lg);
        }

        .footer-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: var(--space-xl);
            margin-bottom: var(--space-xl);
        }

        .footer-brand {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
        }

        .footer-logo {
            font-size: 2rem;
            font-weight: 700;
            color: var(--white);
        }

        .footer-mission {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.7;
        }

        .footer-social {
            display: flex;
            gap: var(--space-sm);
        }

        .social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: var(--white);
            transition: all var(--transition-fast);
        }

        .social-link:hover {
            background-color: var(--tiger-orange);
            transform: translateY(-3px);
        }

        .footer-links {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-lg);
        }

        .footer-column {
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
        }

        .footer-heading {
            color: var(--white);
            font-size: 1.2rem;
            margin-bottom: var(--space-sm);
            font-weight: 600;
        }

        .footer-link {
            color: rgba(255, 255, 255, 0.8);
            transition: color var(--transition-fast);
        }

        .footer-link:hover {
            color: var(--tiger-orange-light);
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: var(--space-lg);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: var(--space-md);
        }

        .copyright {
            color: rgba(255, 255, 255, 0.7);
        }

        .footer-legal {
            display: flex;
            gap: var(--space-lg);
        }

        .legal-link {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
        }

        .legal-link:hover {
            color: var(--white);
        }

        /* ===== Responsive Design ===== */
        @media (max-width: 992px) {
            .hero-container {
                flex-direction: column;
                text-align: center;
            }
            
            .hero-visual {
                order: -1;
                margin-bottom: var(--space-xl);
            }
            
            .color-blocks {
                flex-direction: row;
                justify-content: center;
            }
            
            .color-block {
                width: 80px;
            }
            
            .about-content {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                left: -100%;
                flex-direction: column;
                background-color: var(--white);
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: var(--shadow-lg);
                padding: var(--space-xl) 0;
                gap: var(--space-lg);
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .mobile-toggle {
                display: block;
            }
            
            .hero-title {
                font-size: 2.5rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .research-grid,
            .team-grid,
            .opportunities-grid {
                grid-template-columns: 1fr;
            }
            
            .publications-list {
                grid-template-columns: 1fr;
            }
            
            .footer-links {
                grid-template-columns: 1fr;
                gap: var(--space-xl);
            }
            
            .footer-bottom {
                flex-direction: column;
                text-align: center;
            }
        }

        @media (max-width: 576px) {
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .btn {
                width: 100%;
                max-width: 300px;
            }
            
            .publications-controls {
                gap: var(--space-xs);
            }
            
            .filter-btn {
                padding: 0.5rem 1rem;
                font-size: 0.9rem;
            }
            
            .about-stats {
                grid-template-columns: 1fr;
            }
        }

        /* ===== Color Display Box ===== */
        .color-display {
            display: flex;
            justify-content: center;
            gap: var(--space-md);
            margin: var(--space-xl) 0;
            flex-wrap: wrap;
        }

        .color-box {
            width: 120px;
            height: 120px;
            border-radius: var(--radius-lg);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            text-align: center;
            box-shadow: var(--shadow-md);
        }

        .color-box.tiger-orange {
            background-color: var(--tiger-orange);
        }

        .color-box.fern-green {
            background-color: var(--fern-green);
        }

        .color-box.white {
            background-color: var(--white);
            color: var(--gray-800);
            border: 2px solid var(--gray-300);
        }
    </style>
</head>
<body>
    <!-- Navigation Menu -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">
                <span class="logo-icon">🌿</span>
                <span class="logo-text">Thrive Lab</span>
            </a>
            <button class="mobile-toggle" aria-label="Toggle navigation menu">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#home" class="nav-link active">Home</a></li>
                <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                <li class="nav-item"><a href="#research" class="nav-link">Research</a></li>
                <li class="nav-item"><a href="#team" class="nav-link">Team</a></li>
                <li class="nav-item"><a href="#publications" class="nav-link">Publications</a></li>
                <li class="nav-item"><a href="#join" class="nav-link">Join Us</a></li>
                <li class="nav-item">
                    <a href="https://github.com/" class="nav-link external" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Color Display -->
    <div class="color-display">
        <div class="color-box tiger-orange">
            Tiger Orange<br>#E97A29
        </div>
        <div class="color-box fern-green">
            Fern Green<br>#4F7942
        </div>
        <div class="color-box white">
            White<br>#FFFFFF
        </div>
    </div>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-title">Thrive Lab</h1>
                <p class="hero-subtitle">Advancing human potential through interdisciplinary research in cognitive science and neuropsychology</p>
                <div class="hero-tagline">
                    <span class="tagline-text">"Cultivating resilience, fostering growth"</span>
                </div>
                <div class="hero-buttons">
                    <a href="#research" class="btn btn-primary">Explore Our Research</a>
                    <a href="#join" class="btn btn-secondary">Join Our Team</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="color-blocks">
                    <div class="color-block tiger-orange"></div>
                    <div class="color-block fern-green"></div>
                    <div class="color-block white"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section about-section">
        <div class="container">
            <h2 class="section-title">About Thrive Lab</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>We're a vibrant research team at the intersection of cognitive science, neuropsychology, and human development. Our mission is to understand the mechanisms that enable individuals and communities to thrive in challenging environments.</p>
                    <p>At Thrive Lab, we investigate cognitive resilience, neuroplasticity, and well-being through multimodal approaches—recording signals from the body (ECG, EDA) and brain (EEG, fNIRS), and analyzing data using advanced computational models (Bayesian statistics, dynamical systems, machine learning).</p>
                    <p>We also develop open-source tools and methodologies to advance psychological science and make research more accessible, reproducible, and impactful.</p>
                </div>
                <div class="about-stats">
                    <div class="stat-card">
                        <div class="stat-number">12+</div>
                        <div class="stat-label">Researchers</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">45+</div>
                        <div class="stat-label">Publications</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">6</div>
                        <div class="stat-label">Active Projects</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">8</div>
                        <div class="stat-label">Open-Source Tools</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Research Themes -->
    <section id="research" class="section research-section">
        <div class="container">
            <h2 class="section-title">Research Themes</h2>
            <div class="research-grid">
                <div class="research-card">
                    <div class="research-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3 class="research-title">Cognitive Resilience</h3>
                    <p class="research-desc">Investigating the neurocognitive mechanisms that enable individuals to maintain or regain cognitive function in the face of stress, aging, or neurological challenges.</p>
                    <div class="research-tags">
                        <span class="tag">EEG/fMRI</span>
                        <span class="tag">Stress Response</span>
                        <span class="tag">Executive Function</span>
                    </div>
                </div>
                <div class="research-card">
                    <div class="research-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <h3 class="research-title">Neuroplasticity & Growth</h3>
                    <p class="research-desc">Exploring how experiences, interventions, and learning reshape brain structure and function across the lifespan.</p>
                    <div class="research-tags">
                        <span class="tag">Learning</span>
                        <span class="tag">Intervention Studies</span>
                        <span class="tag">Longitudinal Design</span>
                    </div>
                </div>
                <div class="research-card">
                    <div class="research-icon">
                        <i class="fas fa-heartbeat"></i>
                    </div>
                    <h3 class="research-title">Psychophysiological Integration</h3>
                    <p class="research-desc">Examining how bodily signals (ECG, EDA, respiration) interact with cognitive and emotional processes to influence well-being.</p>
                    <div class="research-tags">
                        <span class="tag">ECG/EDA</span>
                        <span class="tag">Embodied Cognition</span>
                        <span class="tag">Biofeedback</span>
                    </div>
                </div>
                <div class="research-card">
                    <div class="research-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h3 class="research-title">Methodological Innovation</h3>
                    <p class="research-desc">Developing and validating open-source tools for neuropsychological assessment, data analysis, and reproducible research.</p>
                    <div class="research-tags">
                        <span class="tag">Open Science</span>
                        <span class="tag">Software Development</span>
                        <span class="tag">Bayesian Methods</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="section team-section">
        <div class="container">
            <h2 class="section-title">Our Thriving Team</h2>
            <p class="section-subtitle">We bring together researchers from diverse backgrounds united by a passion for understanding human potential</p>
            
            <div class="team-grid">
                <!-- Team Director -->
                <div class="team-card director-card">
                    <div class="team-photo">
                        <div class="photo-placeholder">
                            <i class="fas fa-user"></i>
                            <div class="director-badge">Lab Director</div>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3 class="team-name">Dr. Alex Morgan</h3>
                        <p class="team-title">Associate Professor of Cognitive Science</p>
                        <p class="team-bio">Specializes in cognitive resilience and neuroplasticity. Leads several NIH-funded projects on stress and cognitive function.</p>
                        <div class="team-links">
                            <a href="#" class="team-link"><i class="fas fa-envelope"></i></a>
                            <a href="#" class="team-link"><i class="fas fa-graduation-cap"></i></a>
                            <a href="#" class="team-link"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                
                <!-- Researchers -->
                <div class="team-card">
                    <div class="team-photo">
                        <div class="photo-placeholder">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3 class="team-name">Dr. Jordan Lee</h3>
                        <p class="team-title">Postdoctoral Researcher</p>
                        <p class="team-bio">Expert in EEG signal processing and computational modeling of neural dynamics.</p>
                        <div class="team-links">
                            <a href="#" class="team-link"><i class="fas fa-envelope"></i></a>
                            <a href="#" class="team-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="team-card">
                    <div class="team-photo">
                        <div class="photo-placeholder">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3 class="team-name">Dr. Sam Chen</h3>
                        <p class="team-title">Research Scientist</p>
                        <p class="team-bio">Develops open-source tools for psychophysiological data analysis and visualization.</p>
                        <div class="team-links">
                            <a href="#" class="team-link"><i class="fas fa-envelope"></i></a>
                            <a href="#" class="team-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="team-card">
                    <div class="team-photo">
                        <div class="photo-placeholder">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3 class="team-name">Taylor Rodriguez</h3>
                        <p class="team-title">PhD Candidate</p>
                        <p class="team-bio">Investigates the effects of mindfulness interventions on cognitive resilience in high-stress populations.</p>
                        <div class="team-links">
                            <a href="#" class="team-link"><i class="fas fa-envelope"></i></a>
                            <a href="#" class="team-link"><i class="fas fa-graduation-cap"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="team-card">
                    <div class="team-photo">
                        <div class="photo-placeholder">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3 class="team-name">Morgan Kim</h3>
                        <p class="team-title">PhD Candidate</p>
                        <p class="team-bio">Studies developmental neuroplasticity and cognitive growth in children from diverse backgrounds.</p>
                        <div class="team-links">
                            <a href="#" class="team-link"><i class="fas fa-envelope"></i></a>
                            <a href="#" class="team-link"><i class="fab fa-researchgate"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="team-card">
                    <div class="team-photo">
                        <div class="photo-placeholder">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="team-info">
                        <h3 class="team-name">Casey Williams</h3>
                        <p class="team-title">Lab Manager & Research Coordinator</p>
                        <p class="team-bio">Ensures smooth lab operations and coordinates participant recruitment across all studies.</p>
                        <div class="team-links">
                            <a href="#" class="team-link"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="team-note">
                <p>We collaborate with researchers from psychology, neuroscience, computer science, and public health. Interested in joining our team? <a href="#join">See opportunities below</a>.</p>
            </div>
        </div>
    </section>

    <!-- Publications Section -->
    <section id="publications" class="section publications-section">
        <div class="container">
            <h2 class="section-title">Recent Publications</h2>
            <div class="publications-controls">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="2023">2023</button>
                <button class="filter-btn" data-filter="2022">2022</button>
                <button class="filter-btn" data-filter="2021">2021</button>
                <button class="filter-btn" data-filter="tools">Tools</button>
            </div>
            
            <div class="publications-list">
                <div class="publication-card" data-year="2023" data-tags="tools">
                    <div class="pub-badge">Tool</div>
                    <h3 class="pub-title">NeuroKit2: A Python toolbox for neurophysiological signal processing</h3>
                    <p class="pub-authors">Makowski, D., Pham, T., Lau, Z. J., <strong>Chen, S.</strong>, &amp; members of the Thrive Lab</p>
                    <p class="pub-journal">Behavior Research Methods, 2023</p>
                    <div class="pub-links">
                        <a href="#" class="pub-link"><i class="fas fa-external-link-alt"></i> Paper</a>
                        <a href="#" class="pub-link"><i class="fab fa-github"></i> Code</a>
                        <a href="#" class="pub-link"><i class="fas fa-book"></i> Documentation</a>
                    </div>
                </div>
                
                <div class="publication-card" data-year="2023">
                    <div class="pub-badge">2023</div>
                    <h3 class="pub-title">Cognitive resilience in the face of chronic stress: A multimodal neuroimaging study</h3>
                    <p class="pub-authors"><strong>Morgan, A.</strong>, Lee, J., Rodriguez, T., &amp; Kim, M.</p>
                    <p class="pub-journal">NeuroImage, 2023</p>
                    <div class="pub-links">
                        <a href="#" class="pub-link"><i class="fas fa-external-link-alt"></i> Paper</a>
                        <a href="#" class="pub-link"><i class="fas fa-chart-bar"></i> Data</a>
                    </div>
                </div>
                
                <div class="publication-card" data-year="2022">
                    <div class="pub-badge">2022</div>
                    <h3 class="pub-title">Mindfulness training enhances prefrontal regulation of amygdala in high-stress individuals</h3>
                    <p class="pub-authors">Rodriguez, T., <strong>Morgan, A.</strong>, &amp; Chen, S.</p>
                    <p class="pub-journal">Biological Psychiatry: Cognitive Neuroscience and Neuroimaging, 2022</p>
                    <div class="pub-links">
                        <a href="#" class="pub-link"><i class="fas fa-external-link-alt"></i> Paper</a>
                    </div>
                </div>
                
                <div class="publication-card" data-year="2022" data-tags="tools">
                    <div class="pub-badge">Tool</div>
                    <h3 class="pub-title">PyPulse: A flexible Python library for physiological data collection</h3>
                    <p class="pub-authors"><strong>Chen, S.</strong>, Williams, C., &amp; Lee, J.</p>
                    <p class="pub-journal">Journal of Open Source Software, 2022</p>
                    <div class="pub-links">
                        <a href="#" class="pub-link"><i class="fas fa-external-link-alt"></i> Paper</a>
                        <a href="#" class="pub-link"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
                
                <div class="publication-card" data-year="2021">
                    <div class="pub-badge">2021</div>
                    <h3 class="pub-title">Developmental trajectories of cognitive control networks from childhood to adolescence</h3>
                    <p class="pub-authors">Kim, M., <strong>Morgan, A.</strong>, &amp; Lee, J.</p>
                    <p class="pub-journal">Developmental Cognitive Neuroscience, 2021</p>
                    <div class="pub-links">
                        <a href="#" class="pub-link"><i class="fas fa-external-link-alt"></i> Paper</a>
                        <a href="#" class="pub-link"><i class="fas fa-chart-bar"></i> Data</a>
                    </div>
                </div>
                
                <div class="publication-card" data-year="2021">
                    <div class="pub-badge">2021</div>
                    <h3 class="pub-title">Bayesian approaches to modeling individual differences in cognitive resilience</h3>
                    <p class="pub-authors">Lee, J., <strong>Morgan, A.</strong>, &amp; Chen, S.</p>
                    <p class="pub-journal">Computational Brain &amp; Behavior, 2021</p>
                    <div class="pub-links">
                        <a href="#" class="pub-link"><i class="fas fa-external-link-alt"></i> Paper</a>
                        <a href="#" class="pub-link"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
            </div>
            
            <div class="publications-footer">
                <a href="#" class="btn btn-secondary">
                    <i class="fas fa-book-open"></i> View All Publications
                </a>
                <p class="pub-note">For a complete list, visit our <a href="#">Google Scholar profile</a> or <a href="#">OSF page</a>.</p>
            </div>
        </div>
    </section>

    <!-- Join Us Section -->
    <section id="join" class="section join-section">
        <div class="container">
            <h2 class="section-title">Join the Thrive Lab</h2>
            <p class="section-subtitle">We're always looking for passionate researchers at all levels</p>
            
            <div class="opportunities-grid">
                <div class="opportunity-card">
                    <h3 class="opportunity-title">Postdoctoral Positions</h3>
                    <p class="opportunity-desc">We have openings for postdocs in cognitive neuroscience, computational modeling, and intervention development.</p>
                    <ul class="opportunity-list">
                        <li><i class="fas fa-check"></i> 2-year positions with possible extension</li>
                        <li><i class="fas fa-check"></i> Competitive salary and benefits</li>
                        <li><i class="fas fa-check"></i> Interdisciplinary collaboration</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Apply Now</a>
                </div>
                
                <div class="opportunity-card">
                    <h3 class="opportunity-title">Graduate Students</h3>
                    <p class="opportunity-desc">We accept PhD students through the Cognitive Science, Psychology, and Neuroscience graduate programs.</p>
                    <ul class="opportunity-list">
                        <li><i class="fas fa-check"></i> Fully-funded positions</li>
                        <li><i class="fas fa-check"></i> Mentorship from multiple faculty</li>
                        <li><i class="fas fa-check"></i> Access to cutting-edge methods</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
                
                <div class="opportunity-card">
                    <h3 class="opportunity-title">Research Assistants</h3>
                    <p class="opportunity-desc">Undergraduate and master's students can gain research experience through volunteer or paid positions.</p>
                    <ul class="opportunity-list">
                        <li><i class="fas fa-check"></i> Flexible hours</li>
                        <li><i class="fas fa-check"></i> Training in research methods</li>
                        <li><i class="fas fa-check"></i> Potential for authorship</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Contact Us</a>
                </div>
            </div>
            
            <div class="lab-culture">
                <h3>Our Lab Culture</h3>
                <p>At Thrive Lab, we believe that a supportive, collaborative environment is essential for scientific innovation and personal growth. We value:</p>
                <div class="culture-values">
                    <div class="value-item">
                        <i class="fas fa-hands-helping"></i>
                        <h4>Collaboration</h4>
                        <p>We work together across disciplines and experience levels</p>
                    </div>
                    <div class="value-item">
                        <i class="fas fa-lock-open"></i>
                        <h4>Open Science</h4>
                        <p>We share data, code, and materials whenever possible</p>
                    </div>
                    <div class="value-item">
                        <i class="fas fa-balance-scale"></i>
                        <h4>Work-Life Balance</h4>
                        <p>We prioritize sustainable research practices</p>
                    </div>
                    <div class="value-item">
                        <i class="fas fa-users"></i>
                        <h4>Diversity & Inclusion</h4>
                        <p>We actively work to create an inclusive environment</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <h3 class="footer-logo">Thrive Lab</h3>
                    <p class="footer-mission">Advancing human potential through interdisciplinary research</p>
                    <div class="footer-social">
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <div class="footer-column">
                        <h4 class="footer-heading">Research</h4>
                        <a href="#" class="footer-link">Projects</a>
                        <a href="#" class="footer-link">Publications</a>
                        <a href="#" class="footer-link">Tools & Software</a>
                        <a href="#" class="footer-link">Datasets</a>
                    </div>
                    
                    <div class="footer-column">
                        <h4 class="footer-heading">People</h4>
                        <a href="#" class="footer-link">Team Members</a>
                        <a href="#" class="footer-link">Alumni</a>
                        <a href="#" class="footer-link">Collaborators</a>
                        <a href="#join" class="footer-link">Join Us</a>
                    </div>
                    
                    <div class="footer-column">
                        <h4 class="footer-heading">Connect</h4>
                        <a href="#" class="footer-link">Contact Information</a>
                        <a href="#" class="footer-link">Directions to Lab</a>
                        <a href="#" class="footer-link">News & Events</a>
                        <a href="#" class="footer-link">Subscribe to Newsletter</a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p class="copyright">&copy; 2026 Thrive Lab. This website is open source.</p>
                <div class="footer-legal">
                    <a href="#" class="legal-link">Privacy Policy</a>
                    <a href="#" class="legal-link">Accessibility</a>
                    <a href="#" class="legal-link">GitHub Repository</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Mobile Navigation Toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Publication Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const publicationCards = document.querySelectorAll('.publication-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                publicationCards.forEach(card => {
                    const year = card.getAttribute('data-year');
                    const tags = card.getAttribute('data-tags');
                    
                    if (filterValue === 'all' || 
                        filterValue === year || 
                        (filterValue === 'tools' && tags === 'tools')) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Team Card Hover Effects
        const teamCards = document.querySelectorAll('.team-card');
        
        teamCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = 'var(--white)';
                navbar.style.backdropFilter = 'none';
            }
        });
        
        // Active nav link based on scroll position
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Initialize animations on load
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            
            // Animate hero elements
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            const heroButtons = document.querySelector('.hero-buttons');
            
            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 300);
            
            setTimeout(() => {
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 600);
            
            setTimeout(() => {
                heroButtons.style.opacity = '1';
                heroButtons.style.transform = 'translateY(0)';
            }, 900);
        });
    </script>
</body>
</html>
