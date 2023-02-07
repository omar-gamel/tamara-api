import { Injectable } from '@nestjs/common';
import axios from 'axios';

// Link: https://api-reference.tamara.co/#tag/Webhooks/paths/~1webhooks~1list/get

@Injectable()
export class RegisterWebhookService {
  public async registerWebhookRequest(input: { url: string; events: string[] }) {
    await await axios({
      method: 'POST',
      url: process.env.TAMARA_RETRIEVE_REGISTERED_WEBHOOKS_API,
      headers: {
        Authorization: `Bearer ${process.env.TAMARA_API_TOKEN}`
      }
    });
  }
}

const res = [
  {
    webhook_id: '4826ecbd-2c16-4882-8d4b-04bcaa96bbc6',
    url: 'https://example.com/tamara/webhook',
    events: [],
    headers: {
      authorization: '1234'
    }
  }
];
