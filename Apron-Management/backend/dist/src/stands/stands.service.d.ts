import { Repository } from 'typeorm';
import { Stand } from './entities/stand.entity';
export declare class StandsService {
    private readonly standRepository;
    constructor(standRepository: Repository<Stand>);
    findAll(): Promise<Stand[]>;
    findOne(stand: string): Promise<Stand | null>;
}
