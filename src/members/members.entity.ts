import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from '../reservations/reservations.entity';

@Entity()
export class Member {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	email: string;

	@OneToMany(() => Reservation, (reservation) => reservation.member)
	reservations: Reservation[];
}
