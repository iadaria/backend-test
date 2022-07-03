import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("WithdrawTimes_end_day_key", ["endDay"], { unique: true })
@Index("WithdrawTimes_end_hour_key", ["endHour"], { unique: true })
@Index("WithdrawTimes_end_minute_key", ["endMinute"], { unique: true })
@Index("WithdrawTimes_end_second_key", ["endSecond"], { unique: true })
@Index("WithdrawTimes_pkey", ["id"], { unique: true })
@Index("WithdrawTimes_start_day_key", ["startDay"], { unique: true })
@Index("WithdrawTimes_start_hour_key", ["startHour"], { unique: true })
@Index("WithdrawTimes_start_minute_key", ["startMinute"], { unique: true })
@Index("WithdrawTimes_start_second_key", ["startSecond"], { unique: true })
@Entity("WithdrawTimes", { schema: "public" })
export class WithdrawTimes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "start_day", nullable: true, unique: true })
  startDay: number | null;

  @Column("integer", { name: "end_day", nullable: true, unique: true })
  endDay: number | null;

  @Column("integer", { name: "start_hour", nullable: true, unique: true })
  startHour: number | null;

  @Column("integer", { name: "end_hour", nullable: true, unique: true })
  endHour: number | null;

  @Column("integer", { name: "start_minute", nullable: true, unique: true })
  startMinute: number | null;

  @Column("integer", { name: "end_minute", nullable: true, unique: true })
  endMinute: number | null;

  @Column("integer", { name: "start_second", nullable: true, unique: true })
  startSecond: number | null;

  @Column("integer", { name: "end_second", nullable: true, unique: true })
  endSecond: number | null;

  @Column("boolean", { name: "is_current", nullable: true })
  isCurrent: boolean | null;

  @Column("timestamp with time zone", { name: "createdAt" })
  createdAt: Date;

  @Column("timestamp with time zone", { name: "updatedAt" })
  updatedAt: Date;
}
