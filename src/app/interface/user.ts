import { SocialUser } from 'angular4-social-login';

export interface User extends SocialUser  {
  role?: string;
}
