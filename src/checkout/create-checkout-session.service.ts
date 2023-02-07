import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TamaraCountryCodeEnum, TamaraCurrencyEnum } from '../payment.enum';

// Link: https://api-reference.tamara.co/#tag/Checkout/paths/~1checkout/post

@Injectable()
export class CreateCheckoutSessionService {
  public async createCheckoutSessionRequest(input: {
    order_reference_id: string;
    order_number?: string;
    amount: number;
    currency: TamaraCurrencyEnum;
    description: string;
    country_code: TamaraCountryCodeEnum;
    payment_type: string;
    instalments?: number;
    locale: string;
    items: [
      {
        reference_id: string;
        type: string;
        name: string;
        sku: string;
        image_url?: string;
        quantity: number;
        unit_price?: {
          amount: number;
          currency: TamaraCurrencyEnum;
        };
        discount_amount?: {
          amount: number;
          currency: TamaraCurrencyEnum;
        };
        tax_amount?: {
          amount: number;
          currency: TamaraCurrencyEnum;
        };
        total_amount: {
          amount: number;
          currency: TamaraCurrencyEnum;
        };
      }
    ];
    consumer: {
      first_name: string;
      last_name: string;
      phone_number: string;
      email: string;
    };
    billing_address?: {
      first_name: string;
      last_name: string;
      line1: string;
      line2?: string;
      region?: string;
      postal_code?: string;
      city: string;
      country_code: TamaraCountryCodeEnum;
      phone_number?: string;
    };
    shipping_address: {
      first_name: string;
      last_name: string;
      line1: string;
      line2?: string;
      region?: string;
      postal_code?: string;
      city: string;
      country_code: TamaraCountryCodeEnum;
      phone_number?: string;
    };
    discount?: { amount: number; currency: TamaraCurrencyEnum };
    tax_amount: {
      amount: number;
      currency: TamaraCurrencyEnum;
    };
    shipping_amount: {
      amount: number;
      currency: TamaraCurrencyEnum;
    };
    merchant_url: {
      success: string;
      failure: string;
      cancel: string;
      notification: string;
    };
    platform?: string;
    is_mobile?: boolean;
    risk_assessment?: {
      customer_age: number;
      customer_dob: Date;
      customer_gender: string;
      customer_nationality: TamaraCountryCodeEnum;
      is_premium_customer: boolean;
      is_existing_customer: boolean;
      is_guest_user: boolean;
      account_creation_date: Date;
      platform_account_creation_date: string;
      date_of_first_transaction: Date;
      is_card_on_file: boolean;
      is_COD_customer: boolean;
      has_delivered_order: boolean;
      is_phone_verified: boolean;
      is_fraudulent_customer: boolean;
      total_ltv: number;
      total_order_count: number;
      order_amount_last3months: number;
      order_count_last3months: number;
      last_order_date: Date;
      last_order_amount: number;
      reward_program_enrolled: boolean;
      reward_program_points: number;
    };
    expires_in_minutes?: number;
    additional_data: {
      delivery_method: string;
      pickup_store: string;
      store_code: string;
      vendor_amount: number;
      merchant_settlement_amount: number;
      vendor_reference_code: string;
    };
  }) {
    await await axios({
      method: 'POST',
      url: process.env.TAMARA_CREATE_CHECKOUT_SESSION_API,
      headers: {
        Authorization: `Bearer ${process.env.TAMARA_API_TOKEN}`
      },
      data: { ...input }
    });
  }
}

const req = {
  order_reference_id: '123456',
  order_number: 'A123456',
  total_amount: {
    amount: 100.55,
    currency: 'SAR'
  },
  description: 'string',
  country_code: 'SA',
  payment_type: 'PAY_BY_INSTALMENTS',
  instalments: null,
  locale: 'en_US',
  items: [{}],
  consumer: {
    first_name: 'Mona',
    last_name: 'Lisa',
    phone_number: '502223333',
    email: 'user@example.com'
  },
  billing_address: {
    first_name: 'Mona',
    last_name: 'Lisa',
    line1: '3764 Al Urubah Rd',
    line2: 'string',
    region: 'As Sulimaniyah',
    postal_code: '12345',
    city: 'Riyadh',
    country_code: 'SA',
    phone_number: '502223333'
  },
  shipping_address: {
    first_name: 'Mona',
    last_name: 'Lisa',
    line1: '3764 Al Urubah Rd',
    line2: 'string',
    region: 'As Sulimaniyah',
    postal_code: '12345',
    city: 'Riyadh',
    country_code: 'SA',
    phone_number: '502223333'
  },
  discount: {
    name: 'Christmas 2020',
    amount: {}
  },
  tax_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  shipping_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  merchant_url: {
    success: 'https://example.com/checkout/success',
    failure: 'https://example.com/checkout/failure',
    cancel: 'https://example.com/checkout/cancel',
    notification: 'https://example.com/payments/tamarapay'
  },
  platform: 'Magento',
  is_mobile: false,
  risk_assessment: {
    customer_age: 22,
    customer_dob: '31-01-2000',
    customer_gender: 'Male',
    customer_nationality: 'SA',
    is_premium_customer: true,
    is_existing_customer: true,
    is_guest_user: true,
    account_creation_date: '31-01-2019',
    platform_account_creation_date: 'string',
    date_of_first_transaction: '31-01-2019',
    is_card_on_file: true,
    is_COD_customer: true,
    has_delivered_order: true,
    is_phone_verified: true,
    is_fraudulent_customer: true,
    total_ltv: 501.5,
    total_order_count: 12,
    order_amount_last3months: 301.5,
    order_count_last3months: 2,
    last_order_date: '31-01-2021',
    last_order_amount: 301.5,
    reward_program_enrolled: true,
    reward_program_points: 300
  },
  expires_in_minutes: 0,
  additional_data: {
    delivery_method: 'home delivery',
    pickup_store: 'Store A',
    store_code: 'Store code A',
    vendor_amount: 0,
    merchant_settlement_amount: 0,
    vendor_reference_code: 'string'
  }
};

const res = {
  order_id: '0a17d40a-6180-4f4b-ba7c-498ae79e30dc',
  checkout_id: '0a17d40a-6180-4f4b-ba7c-498ae79e30dc',
  checkout_url: 'https://tamara.co/checkout/0a17d40a-6180-4f4b-ba7c-498ae79e30dc?locale=en_US'
};
