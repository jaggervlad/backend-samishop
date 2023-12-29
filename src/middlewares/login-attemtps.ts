import { NextFunction, Request, Response } from 'express';

const loginAttempts: Record<string, number> = {};

export const checkLoginAttempts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body.email;
  const attempts = loginAttempts[email] || 0;
  console.log(email);

  console.log({ loginAttempts });
  console.log({ attempts });

  if (attempts >= 3) {
    return res.status(403).json({
      ok: false,
      error: 'Demasiados intentos fallidos, intetalo de nuevo mas tarde',
    });
  }

  next();
};

export const clearLoginAttemtps = (email: string) => {
  loginAttempts[email];

  console.log('Clear login attemps');

  console.log({ loginAttempts });
};

export const incrementLoginAttemtps = (email: string) => {
  loginAttempts[email] = (loginAttempts[email] || 0) + 1;
};
