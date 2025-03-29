import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Reservation } from './reservations.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReservationsService {
	constructor(
		@InjectRepository(Reservation)
		private reservationRepository: Repository<Reservation>,
	) {}

	async findAll(): Promise<Reservation[]> {
		return this.reservationRepository.find({ relations: ['member'] });
	}

	async create(date: string, memberId: number): Promise<Reservation> {
		const reservation = this.reservationRepository.create({ date, member: { id: memberId } });
		return this.reservationRepository.save(reservation);
	}
}
