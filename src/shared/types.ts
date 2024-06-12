export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "cotactus"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}