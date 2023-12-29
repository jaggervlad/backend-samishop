import { sign, verify } from 'jsonwebtoken';
import { User } from '../services/users';

const JWT_SECRET = process.env.JWT_SECRET || 'tokenalv';

export function generateToken(user: Partial<User>) {
  const jwt = sign(user, JWT_SECRET, {
    expiresIn: '24h',
  });

  return jwt;
}

export function verifyToken(jwt: string) {
  return verify(jwt, JWT_SECRET);
}
