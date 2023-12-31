import { Request, Response, NextFunction } from 'express';
import { TiposUsuarios } from '../resources/tipoUsuario/tipoUsuario.constants';

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.tipoUsuarioId === TiposUsuarios.ADMIN) next();
  else res.status(403).json({ msg: 'Não tem permissão.' });
};

export default checkAdmin;
