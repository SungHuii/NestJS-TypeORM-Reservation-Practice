import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { Member } from './members.entity';
import { ReservationsModule } from 'src/reservations/reservations.module';

@Module({
	imports: [TypeOrmModule.forFeature([Member]), ReservationsModule],
	controllers: [MembersController],
	providers: [MembersService],
	exports: [MembersService, TypeOrmModule],
})
export class MembersModule {}
