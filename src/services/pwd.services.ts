import argon2 from 'argon2';

class PasswordService {
  public async hash(pwd: string) {
    return argon2.hash(pwd);
  }
  public async verify(hashedPwd: string, pwd: string) {
    return argon2.verify(hashedPwd, pwd);
  }
}

export default new PasswordService();
