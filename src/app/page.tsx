"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Music, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="aurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Album"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Tracks", id: "tracks" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="New Album Release"
          description="Experience the latest musical journey. Premium sound, authentic emotion, unforgettable moments."
          tag="Out Now"
          tagIcon={Music}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762203837-1l2uco5f.jpg"
          imageAlt="Album artwork showcase"
          textPosition="center"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Listen Now", href: "#tracks" },
            { text: "Learn More", href: "#about" }
          ]}
        />
      </div>

      <div id="tracks" data-section="tracks">
        <ProductCardThree
          title="Featured Tracks"
          description="Explore the standout songs from the album"
          tag="Album"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "track-1",
              name: "Opening Dreams",
              price: "Track 1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762205102-47bnkup7.jpg",
              imageAlt: "Track 1 cover",
              initialQuantity: 1
            },
            {
              id: "track-2",
              name: "Midnight Echo",
              price: "Track 2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762205102-47bnkup7.jpg",
              imageAlt: "Track 2 cover",
              initialQuantity: 1
            },
            {
              id: "track-3",
              name: "Golden Horizon",
              price: "Track 3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762205102-47bnkup7.jpg",
              imageAlt: "Track 3 cover",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          title="Behind the Music"
          description="Discover the creative process, inspiration, and stories that shaped this album. From composition to final production, every element was crafted with passion and precision."
          tag="The Story"
          tagIcon={Sparkles}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762206492-86xaj9dt.jpg",
            imageAlt: "Artist at work"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762207641-2r3ypnvf.jpg",
            imageAlt: "Recording studio sessions"
          }}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Album Impact"
          description="Milestone achievements and listener response"
          tag="Stats"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              value: "500K+",
              description: "Total Streams"
            },
            {
              id: "2",
              value: "12",
              description: "Tracks on Album"
            },
            {
              id: "3",
              value: "45 min",
              description: "Runtime"
            },
            {
              id: "4",
              value: "2024",
              description: "Release Year"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Listener Reviews"
          description="What fans and critics are saying about the album"
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Music Critic",
              testimonial: "A masterpiece that showcases incredible artistry and production depth. Every track tells a story.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762208787-j94ow6wu.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Podcast Host",
              testimonial: "The production quality is exceptional. This album sets a new standard for modern music.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762209689-vcogvl7t.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Festival Organizer",
              testimonial: "An inspiring collection of songs that resonates with audiences of all ages and backgrounds.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762210636-rjbkykcd.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "Marcus Thompson",
              role: "Recording Producer",
              testimonial: "The technical execution combined with emotional depth makes this a standout release this year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762211439-odtav2sx.jpg",
              imageAlt: "Marcus Thompson"
            }
          ]}
        />
      </div>

      <div id="streaming" data-section="streaming">
        <SocialProofOne
          title="Listen Everywhere"
          description="Available on all major streaming platforms"
          tag="Platforms"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762212566-6zl7115i.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762213629-l40bqh21.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762214607-znapawvq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762215445-ibdi0cbe.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762216551-07z7rebs.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764762217713-obrtkucj.jpg"
          ]
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Stay Connected"
          description="Subscribe to get updates about new releases, upcoming tour dates, and exclusive content."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Your message or question",
            rows: 4,
            required: false
          }}
          buttonText="Subscribe"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Album",
              items: [
                { label: "Tracks", href: "tracks" },
                { label: "About", href: "about" },
                { label: "Credits", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Listen",
              items: [
                { label: "Spotify", href: "https://spotify.com" },
                { label: "Apple Music", href: "https://apple.com" },
                { label: "YouTube Music", href: "https://youtube.com" }
              ]
            }
          ]}
          copyrightText="© 2024 Album. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}