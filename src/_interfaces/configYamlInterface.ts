export interface configYamlInterface {
  company_en: string;
  company_kr: string;
  ceo: string;
  duty: string;
  bs_number: string;
  address: string;
  tel_number: string;
  fax_number: string;
  email: string;
  kakao: string;
  description: string,
  sub_description: string,

  mission: string,
  vision: string,
  slogan: string,

  iso_info: {
    i01: boolean
    i02: boolean
    i03: boolean
    i04: boolean
  }

  enterprise_info: {
    e01: boolean
    e02: boolean
    e03: boolean
  }

  product_info: {
    p01: boolean
  }

  business_info: {
    b01: boolean
  }
}