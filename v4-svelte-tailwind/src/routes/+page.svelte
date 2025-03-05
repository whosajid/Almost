<script>
  import Header from '../components/Header.svelte';
  import Section from '../components/Section.svelte';
  import MainSection from '../components/MainSection.svelte';
  import CTA from '../components/CTA.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Header />
<Section 
  heading="We Build Websites"
  details="Ever dreamed of a website that loads in under a minute? We make that happen—sometimes even faster."
  link="#"
  linkText="Explore the magic"
  img="img/building websites.svg"
  heading2="Marketing Strategies That May or May Not Work"
  details2="We throw ideas at the wall so you don’t have to. Some even stick."
  link2="#"
  linkText2="See what sticks"
  img2="img/marketing.svg"
/>

<MainSection 
  heading="Making Google Happy (At Your Own Risk)"
  details="SEO is an art, a science, and a guessing game all at once. We somehow make it work."
/>

<Section 
  heading="SEO: Impress Google, Confuse Humans"
  details="We optimize your site so well, even you might not recognize it anymore."
  link="#"
  linkText="Decode the strategy"
  img="img/seo.svg"
  heading2="Designs That Make You Say ‘Nice’"
  details2="We blend aesthetics and usability. Mostly. No Comic Sans, we promise."
  link2="#"
  linkText2="Judge for yourself"
  img2="img/design.svg"
/>

<MainSection 
  heading="Code, Chaos, and Customer Support"
  details="The best developers Google everything. The best support team answers before you rage quit."
/>

<Section 
  heading="Development That’s 90% Googling"
  details="We write code that works. Don’t ask how we got there."
  link="#"
  linkText="Trust the process"
  img="img/code.svg"
  heading2="Support That Answers Before You Rage Quit"
  details2="Got an issue? We’ll fix it before you break something expensive."
  link2="#"
  linkText2="Test our patience"
  img2="img/support.svg"
/>

<CTA 
  heading="We are almost perfect"
  details="What are you waiting for? Hire us already. Please, we got bills to pay."
  linkText="Take the risk"
  link="#"
/>

<Footer />
