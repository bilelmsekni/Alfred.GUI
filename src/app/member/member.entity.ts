import { IArtifact } from '../artifact/artifact.entity';
import { Role } from './role.enum';

export interface IMember {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    role: Role,
    artifacts: IArtifact[],
}