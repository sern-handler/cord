import { None, Some, unimplemented } from '@rqft/rust';

import type { Option } from '@rqft/rust';
import type { RawApplicationRoleConnectionMetadata } from '../types/Application';

import type { NitroType } from 'src/types/User';
import type { Item } from '../common';
import type { RawIntegration } from './Guild';

import { Id } from './Id';
// import { injectPath } from '../tools';

export interface RawUser extends Item {
  // id: Snowflake;
  username: string;
  discriminator: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  nitro_type?: NitroType;
  public_flags?: number;
}

export class User {
  
  /**
   * Sends message to user (DM)
   */
  public send() {
    return unimplemented();
  }

  /**
   * The unique Discord ID of the user
   * 
   * @since 1.0.0
   */
  public get id(): Id {
    return new Id(this.raw.id);
  }

  /**
   * The username of the user
   * 
   * @since 1.0.0
   */
  public get username(): string {
    return this.raw.id;
  }

  /**
   * The discriminator of the user `AwesomeName#0001`
   * 
   * @since 1.0.0
   */
  public get discriminator(): string {
    return this.raw.discriminator;
  }

  /**
   * The 
   * 
   */
  public get avatar(): Option<string> {
    if (this.raw.avatar) {
      return Some(this.raw.avatar);
    }

    return None;
  }

  public get avatarUrl(): Option<string> {
    return unimplemented();
  }

  constructor(private raw: RawUser) { }
}


export interface RawApplicationRoleConnection {
  platform_name?: string;
  playform_username?: string;
  metadata?: RawApplicationRoleConnectionMetadata;
}

