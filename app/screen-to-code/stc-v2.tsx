import React from "react";
import { Box, Container } from "@mui/material";
import { Header } from "@/app/screen-to-code/components/v2/header";
import { HeaderBanner } from "@/app/screen-to-code/components/v2/header-banner";
import { VisionSection } from "@/app/screen-to-code/components/v2/vision-section";
import { PropertiesSection } from "@/app/screen-to-code/components/v2/properties-section";
import { FeaturesSection } from "@/app/screen-to-code/components/v2/features-section";
import { HorizontalCardSection } from "@/app/screen-to-code/components/v2/horizontal-card-section";
import { HowItWorkSection } from "@/app/screen-to-code/components/v2/how-it-work-section";
import { WhyChooseSection } from "@/app/screen-to-code/components/v2/why-choose-section";
import { TestimonialsSection } from "@/app/screen-to-code/components/v2/testimonials-section";
import { BlogsSection } from "@/app/screen-to-code/components/v2/blogs-section";
import { FooterBanner } from "@/app/screen-to-code/components/v2/footer-banner";
import { Footer } from "@/app/screen-to-code/components/v2/footer";

export const STCv2 = () => {
	return (
		<Box>
			<Container maxWidth={"lg"}>
				<Header/>
				<HeaderBanner/>
				<VisionSection/>
				<PropertiesSection/>
				<FeaturesSection/>
				<HorizontalCardSection/>
				<HowItWorkSection/>
				<WhyChooseSection/>
				<TestimonialsSection/>
				<BlogsSection/>
				<FooterBanner/>
				<Footer/>
			</Container>
		</Box>
	);
};
