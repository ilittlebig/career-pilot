/**
 *
 *
 * Author: Elias Sjödin
 * Created: 2025-01-27
 */

export interface CognitoIdToken {
	sub: string;
	email?: string;
	email_verified?: boolean;
	name?: string;
	given_name?: string;
	family_name?: string;
	aud: string;
	iss: string;
	iat: number;
	exp: number;
	[key: string]: unknown;
}

