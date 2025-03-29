import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './reservations.entity';

@Controller('reservations')
export class ReservationsController {
	constructor(private readonly reservationsService: ReservationsService) {}

	@Get()
	findAll(): Promise<Reservation[]> {
		return this.reservationsService.findAll();
	}

	@Post()
	create(@Body('date') date: string, @Body('memberId') memberId: number): Promise<Reservation> {
		return this.reservationsService.create(date, memberId);
	}
}
