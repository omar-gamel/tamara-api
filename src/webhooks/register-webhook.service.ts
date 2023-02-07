import { Injectable } from '@nestjs/common';
import axios from 'axios';

// Link: https://api-reference.tamara.co/#tag/Webhooks/paths/~1webhooks/post

@Injectable()
export class RegisterWebhookService {
  public async registerWebhookRequest(input: { url: string; events: string[] }) {
    await await axios({
      method: 'POST',
      url: process.env.TAMARA_REGISTER_WEBHOOK_API,
      headers: {
        Authorization: `Bearer ${process.env.TAMARA_API_TOKEN}`
      },
      data: { ...input }
    });
  }
}
const req = {
  url: 'https://example.com/tamara/webhook',
  events: [
    'order_approved',
    'order_declined',
    'order_authorised',
    'order_canceled',
    'order_captured',
    'order_refunded',
    'order_expired'
  ],
  headers: {
    authorization: '1234'
  }
};

const res = {
  webhook_id: '4826ecbd-2c16-4882-8d4b-04bcaa96bbc6',
  url: 'https://example.com/tamara/webhook',
  events: [
    'order_approved',
    'order_declined',
    'order_authorised',
    'order_canceled',
    'order_captured',
    'order_refunded',
    'order_expired'
  ],
  headers: {
    authorization: '1234'
  }
};
