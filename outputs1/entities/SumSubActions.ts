import {Column,Entity,Index,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {VerifyActions} from './VerifyActions'


@Index("SumSubActions_pkey",["id",],{ unique:true })
@Entity("SumSubActions" ,{schema:"public" } )
export  class SumSubActions {

@PrimaryGeneratedColumn({ type:"integer", name:"id" })
id:number;

@Column("character varying",{ name:"action_type",nullable:true,length:255 })
actionType:string | null;

@Column("character varying",{ name:"action_id",nullable:true,length:255 })
actionId:string | null;

@Column("character varying",{ name:"applicant_id",nullable:true,length:255 })
applicantId:string | null;

@Column("integer",{ name:"account_id",nullable:true })
accountId:number | null;

@Column("character varying",{ name:"status",nullable:true,length:255 })
status:string | null;

@Column("jsonb",{ name:"meta",nullable:true })
meta:object | null;

@Column("jsonb",{ name:"review",nullable:true })
review:object | null;

@Column("timestamp with time zone",{ name:"createdAt" })
createdAt:Date;

@Column("timestamp with time zone",{ name:"updatedAt" })
updatedAt:Date;

@Column("text",{ name:"external_action_id",nullable:true })
externalActionId:string | null;

@Column("enum",{ name:"domain",enum:["applicationServer","p2p"],default: () => "'applicationServer'"enum_SumSubActions_domain"", })
domain:"applicationServer" | "p2p";

@OneToMany(()=>VerifyActions,verifyActions=>verifyActions.sumSubAction)


verifyActions:VerifyActions[];

}
