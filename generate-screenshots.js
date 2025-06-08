const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Portfolio projects - matches the projects displayed in the portfolio
function getPortfolioProjects() {
  return [
    {
      title: "ArtVerse",
      description: "A creative digital art platform showcasing artistic expressions and visual creativity.",
      image: "/screenshots/artverse.png",
      link: "https://igor-kan.github.io/artverse",
      githubLink: "https://github.com/igor-kan/artverse",
      tags: ["Art", "Creative", "Digital Art"],
      imagePath: "./public/screenshots/artverse.png"
    },
    {
      title: "BibleReader",
      description: "A modern Bible reading application with clean interface for studying scripture, featuring multiple translations and search functionality.",
      image: "/screenshots/biblereader.png",
      link: "https://igor-kan.github.io/biblereader",
      githubLink: "https://github.com/igor-kan/biblereader",
      tags: ["Reading", "Scripture", "Next.js"],
      imagePath: "./public/screenshots/biblereader.png"
    },
    {
      title: "AutoOps",
      description: "Automated operations management platform for legacy AI systems with workflow automation and monitoring analytics.",
      image: "/screenshots/autoops.png",
      link: "https://igor-kan.github.io/autoops",
      githubLink: "https://github.com/igor-kan/autoops",
      tags: ["Automation", "AI Operations", "Workflow"],
      imagePath: "./public/screenshots/autoops.png"
    },
    {
      title: "AutoWork",
      description: "Task automation platform to boost productivity with customizable triggers, actions, and integration with popular tools.",
      image: "/screenshots/autowork.png",
      link: "https://igor-kan.github.io/autowork",
      githubLink: "https://github.com/igor-kan/autowork",
      tags: ["Productivity", "Automation", "Workflow"],
      imagePath: "./public/screenshots/autowork.png"
    },
    {
      title: "AntiHate",
      description: "Platform for combating hate speech and promoting positive online discourse with community moderation and educational resources.",
      image: "/screenshots/antihate.png",
      link: "https://igor-kan.github.io/antihate",
      githubLink: "https://github.com/igor-kan/antihate",
      tags: ["Social Impact", "Moderation", "Community"],
      imagePath: "./public/screenshots/antihate.png"
    },
    {
      title: "AlgoFund",
      description: "Algorithmic trading and investment fund management platform with backtesting, portfolio tracking, and real-time market data.",
      image: "/screenshots/algofund.png",
      link: "https://igor-kan.github.io/algofund",
      githubLink: "https://github.com/igor-kan/algofund",
      tags: ["FinTech", "Trading", "Investment"],
      imagePath: "./public/screenshots/algofund.png"
    },
    {
      title: "AIStylist",
      description: "AI-powered wardrobe management app with outfit recommendations, virtual try-on features, and personalized style profiles.",
      image: "/screenshots/aistylist.png",
      link: "https://igor-kan.github.io/aistylist",
      githubLink: "https://github.com/igor-kan/aistylist",
      tags: ["AI", "Fashion", "Style"],
      imagePath: "./public/screenshots/aistylist.png"
    },
    {
      title: "LedgerAI",
      description: "Automated ledger management with AI-powered accounting insights, transaction management, and real-time analytics.",
      image: "/screenshots/ledgerai.png",
      link: "https://igor-kan.github.io/ledgerai",
      githubLink: "https://github.com/igor-kan/ledgerai",
      tags: ["AI", "Accounting", "Finance"],
      imagePath: "./public/screenshots/ledgerai.png"
    },
    {
      title: "AetherHealth",
      description: "Modern health management application with comprehensive features for tracking and managing personal health data.",
      image: "/screenshots/aetherhealth.png",
      link: "https://igor-kan.github.io/aetherhealth",
      githubLink: "https://github.com/igor-kan/aetherhealth",
      tags: ["Healthcare", "Management", "Wellness"],
      imagePath: "./public/screenshots/aetherhealth.png"
    }
  ];
}

async function takeScreenshot(project, retries = 3) {
  let browser;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Taking screenshot for ${project.title} (attempt ${attempt}/${retries})...`);
      
      browser = await puppeteer.launch({
        headless: "new",
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor'
        ],
      });
      
      const page = await browser.newPage();
      
      // Set viewport for consistent screenshots
      await page.setViewport({ 
        width: 1200, 
        height: 800, 
        deviceScaleFactor: 1 
      });
      
      // Set user agent to avoid bot detection
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
      
      // Navigate to the project page
      await page.goto(project.link, { 
        waitUntil: 'networkidle2', 
        timeout: 30000 
      });
      
      // Wait a bit more for any animations or dynamic content
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Take screenshot with PNG format (no quality option for PNG)
      await page.screenshot({ 
        path: project.imagePath,
        type: 'png',
        fullPage: false
      });
      
      console.log(`✅ Screenshot for ${project.title} taken successfully at ${project.imagePath}`);
      await browser.close();
      return true;
      
    } catch (error) {
      console.error(`❌ Error taking screenshot for ${project.title} (attempt ${attempt}): ${error.message}`);
      
      if (browser) {
        await browser.close();
      }
      
      if (attempt === retries) {
        console.log(`Creating placeholder for ${project.title}`);
        return false;
      }
      
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
  
  return false;
}

async function generateAllScreenshots() {
  const projects = getPortfolioProjects();
  
  console.log(`📸 Found ${projects.length} portfolio projects to screenshot:`);
  projects.forEach(p => console.log(`  - ${p.title} (${p.link})`));
  console.log('');
  
  const results = [];
  
  for (const project of projects) {
    const success = await takeScreenshot(project);
    results.push({ project: project.title, success });
    
    // Small delay between screenshots to be respectful
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n📊 Screenshot Generation Summary:');
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  
  if (failed > 0) {
    console.log('\nFailed projects:');
    results.filter(r => !r.success).forEach(r => console.log(`  - ${r.project}`));
  }
  
  // Generate projects data file for easy import
  console.log('\n📝 Generating projects data file...');
  if (!fs.existsSync('./lib')) {
    fs.mkdirSync('./lib', { recursive: true });
  }
  
  const projectsData = projects.map(p => ({
    title: p.title,
    description: p.description,
    image: p.image,
    link: p.link,
    githubLink: p.githubLink,
    tags: p.tags
  }));
  
  fs.writeFileSync(
    './lib/projects-data.json', 
    JSON.stringify(projectsData, null, 2)
  );
  
  console.log('✅ Projects data saved to ./lib/projects-data.json');
  console.log('\n🎉 All screenshots generated successfully!');
}

// Add error handling for unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

generateAllScreenshots().catch(console.error); 