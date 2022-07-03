import {Column,Entity,Index,JoinColumn,ManyToOne,OneToMany,PrimaryGeneratedColumn} from "typeorm";
import {AccMaxStructs} from './AccMaxStructs'
import {AccStatusHistories} from './AccStatusHistories'
import {AmbassadorDelayedIncomes} from './AmbassadorDelayedIncomes'
import {AmirCells} from './AmirCells'
import {BasketItems} from './BasketItems'
import {Bookmarks} from './Bookmarks'
import {CumulativeDiscountChanges} from './CumulativeDiscountChanges'
import {ExchangeOrders} from './ExchangeOrders'
import {ExchangeTransactions} from './ExchangeTransactions'
import {MailerQueues} from './MailerQueues'
import {NotificationQueues} from './NotificationQueues'
import {NotificationTokens} from './NotificationTokens'
import {Notifications} from './Notifications'
import {Products} from './Products'
import {ServerConfigurations} from './ServerConfigurations'
import {ShopBannerSlides} from './ShopBannerSlides'
import {StructureHistory} from './StructureHistory'
import {Sunnybooks} from './Sunnybooks'
import {SunriseActivities} from './SunriseActivities'
import {Transactions} from './Transactions'
import {UserNotifications} from './UserNotifications'
import {VerifyActions} from './VerifyActions'
import {WithdrawTransferGroups} from './WithdrawTransferGroups'


@Index("account_applicant_id",["applicantId",],{ unique:true })
@Index("account_email",["email",],{ unique:true })
@Index("Accounts_pkey",["id",],{ unique:true })
@Entity("Accounts" ,{schema:"public" } )
export  class Accounts {

@PrimaryGeneratedColumn({ type:"integer", name:"id" })
id:number;

@Column("character varying",{ name:"email",nullable:true,length:255 })
email:string | null;

@Column("character varying",{ name:"name",nullable:true,length:255 })
name:string | null;

@Column("character varying",{ name:"password",nullable:true,length:255 })
password:string | null;

@Column("timestamp with time zone",{ name:"createdAt" })
createdAt:Date;

@Column("timestamp with time zone",{ name:"updatedAt" })
updatedAt:Date;

@Column("boolean",{ name:"email_is_verified",default: () => "false", })
emailIsVerified:boolean;

@Column("character varying",{ name:"email_code",nullable:true,length:255 })
emailCode:string | null;

@Column("integer",{ name:"level",default: () => "0", })
level:number;

@Column("boolean",{ name:"phone_is_verified",default: () => "false", })
phoneIsVerified:boolean;

@Column("character varying",{ name:"phone",nullable:true,length:255 })
phone:string | null;

@Column("character varying",{ name:"phone_code",nullable:true,length:255 })
phoneCode:string | null;

@Column("boolean",{ name:"is_verified",default: () => "false", })
isVerified:boolean;

@Column("character varying",{ name:"refferal",nullable:true,length:255 })
refferal:string | null;

@Column("boolean",{ name:"is_old",nullable:true,default: () => "false", })
isOld:boolean | null;

@Column("character varying",{ name:"last_status",nullable:true,length:255 })
lastStatus:string | null;

@Column("character varying",{ name:"last_status_change",nullable:true,length:255 })
lastStatusChange:string | null;

@Column("integer",{ name:"last_notification_id",nullable:true })
lastNotificationId:number | null;

@Column("boolean",{ name:"refferal_agree",nullable:true })
refferalAgree:boolean | null;

@Column("boolean",{ name:"ref_tour_passed",nullable:true })
refTourPassed:boolean | null;

@Column("boolean",{ name:"balance_tour_passed",nullable:true })
balanceTourPassed:boolean | null;

@Column("integer",{ name:"group_id",nullable:true })
groupId:number | null;

@Column("character varying",{ name:"bonus_status",nullable:true,length:255 })
bonusStatus:string | null;

@Column("boolean",{ name:"in_bonus_action",nullable:true })
inBonusAction:boolean | null;

@Column("jsonb",{ name:"settings",nullable:true })
settings:object | null;

@Column("boolean",{ name:"was_refferal_enabled",nullable:true })
wasRefferalEnabled:boolean | null;

@Column("boolean",{ name:"is_google_enabled",nullable:true })
isGoogleEnabled:boolean | null;

@Column("boolean",{ name:"is_google_verified",nullable:true })
isGoogleVerified:boolean | null;

@Column("character varying",{ name:"google_secret",nullable:true,length:255 })
googleSecret:string | null;

@Column("text",{ name:"google_qr_code",nullable:true })
googleQrCode:string | null;

@Column("boolean",{ name:"is_ambassador",nullable:true,default: () => "false", })
isAmbassador:boolean | null;

@Column("boolean",{ name:"is_reinvest",default: () => "false", })
isReinvest:boolean;

@Column("boolean",{ name:"is_suspended",default: () => "false", })
isSuspended:boolean;

@Column("jsonb",{ name:"reinvestment",nullable:true })
reinvestment:object | null;

@Column("integer",{ name:"ambassador_level",default: () => "0", })
ambassadorLevel:number;

@Column("int4",{ name:"disabled_refferal_lines",nullable:true,array:true })
disabledRefferalLines:number[] | null;

@Column("character varying",{ name:"language",nullable:true,length:255 })
language:string | null;

@Column("character varying",{ name:"twofa_type",nullable:true,length:255 })
twofaType:string | null;

@Column("character varying",{ name:"twofa_status",nullable:true,length:255,default: () => "'disabled'", })
twofaStatus:string | null;

@Column("character varying",{ name:"twofa_error_reason",nullable:true,length:255 })
twofaErrorReason:string | null;

@Column("character varying",{ name:"applicant_id",nullable:true,length:255 })
applicantId:string | null;

@Column("jsonb",{ name:"notification_settings",nullable:true })
notificationSettings:object | null;

@Column("boolean",{ name:"can_become_ambassador",nullable:true,default: () => "false", })
canBecomeAmbassador:boolean | null;

@Column("timestamp with time zone",{ name:"sunrise_processed_date",nullable:true })
sunriseProcessedDate:Date | null;

@Column("boolean",{ name:"can_watch_lines",nullable:true })
canWatchLines:boolean | null;

@Column("integer",{ name:"old_ambassador_level",nullable:true })
oldAmbassadorLevel:number | null;

@Column("boolean",{ name:"is_actual_ambassador",nullable:true,default: () => "false", })
isActualAmbassador:boolean | null;

@Column("boolean",{ name:"allow_show_contacts",nullable:true,default: () => "false", })
allowShowContacts:boolean | null;

@Column("bigint",{ name:"last_discount_applied_at",nullable:true })
lastDiscountAppliedAt:string | null;

@Column("enum",{ name:"sms_service_preference",enum:["none","twilio","intis"],default: () => "'none'"enum_Accounts_sms_service_preference"", })
smsServicePreference:"none" | "twilio" | "intis";

@Column("boolean",{ name:"shop_agree",nullable:true,default: () => "false", })
shopAgree:boolean | null;

@Column("text",{ name:"suspended_reason",nullable:true })
suspendedReason:string | null;

@Column("timestamp with time zone",{ name:"last_seen_at",nullable:true })
lastSeenAt:Date | null;

@Column("integer",{ name:"role_id",nullable:true })
roleId:number | null;

@Column("boolean",{ name:"sunrise_agree",nullable:true,default: () => "false", })
sunriseAgree:boolean | null;

@Column("boolean",{ name:"ambassador_agree",nullable:true,default: () => "false", })
ambassadorAgree:boolean | null;

@Column("timestamp with time zone",{ name:"ambassador_level_updated_at",default: () => "'2021-11-16 09:16:11.831+00'", })
ambassadorLevelUpdatedAt:Date;

@Column("character varying",{ name:"screening_token",nullable:true,length:255 })
screeningToken:string | null;

@Column("timestamp with time zone",{ name:"verified_at",nullable:true })
verifiedAt:Date | null;

@Column("boolean",{ name:"manual_kyc_status",nullable:true,default: () => "false", })
manualKycStatus:boolean | null;

@OneToMany(()=>AccMaxStructs,accMaxStructs=>accMaxStructs.root)


accMaxStructs:AccMaxStructs[];

@OneToMany(()=>AccStatusHistories,accStatusHistories=>accStatusHistories.root)


accStatusHistories:AccStatusHistories[];

@ManyToOne(()=>Accounts,accounts=>accounts.accounts)
@JoinColumn([{ name: "trustee_id", referencedColumnName: "id" },
])

trustee:Accounts;

@OneToMany(()=>Accounts,accounts=>accounts.trustee)


accounts:Accounts[];

@OneToMany(()=>AmbassadorDelayedIncomes,ambassadorDelayedIncomes=>ambassadorDelayedIncomes.ambassador)


ambassadorDelayedIncomes:AmbassadorDelayedIncomes[];

@OneToMany(()=>AmirCells,amirCells=>amirCells.account)


amirCells:AmirCells[];

@OneToMany(()=>BasketItems,basketItems=>basketItems.account)


basketItems:BasketItems[];

@OneToMany(()=>Bookmarks,bookmarks=>bookmarks.account)


bookmarks:Bookmarks[];

@OneToMany(()=>CumulativeDiscountChanges,cumulativeDiscountChanges=>cumulativeDiscountChanges.account)


cumulativeDiscountChanges:CumulativeDiscountChanges[];

@OneToMany(()=>CumulativeDiscountChanges,cumulativeDiscountChanges=>cumulativeDiscountChanges.changer)


cumulativeDiscountChanges2:CumulativeDiscountChanges[];

@OneToMany(()=>ExchangeOrders,exchangeOrders=>exchangeOrders.account)


exchangeOrders:ExchangeOrders[];

@OneToMany(()=>ExchangeTransactions,exchangeTransactions=>exchangeTransactions.account)


exchangeTransactions:ExchangeTransactions[];

@OneToMany(()=>MailerQueues,mailerQueues=>mailerQueues.account)


mailerQueues:MailerQueues[];

@OneToMany(()=>NotificationQueues,notificationQueues=>notificationQueues.account)


notificationQueues:NotificationQueues[];

@OneToMany(()=>NotificationTokens,notificationTokens=>notificationTokens.account)


notificationTokens:NotificationTokens[];

@OneToMany(()=>Notifications,notifications=>notifications.creator)


notifications:Notifications[];

@OneToMany(()=>Products,products=>products.seller)


products:Products[];

@OneToMany(()=>ServerConfigurations,serverConfigurations=>serverConfigurations.notifyAdmin)


serverConfigurations:ServerConfigurations[];

@OneToMany(()=>ShopBannerSlides,shopBannerSlides=>shopBannerSlides.addedBy)


shopBannerSlides:ShopBannerSlides[];

@OneToMany(()=>ShopBannerSlides,shopBannerSlides=>shopBannerSlides.deletedBy)


shopBannerSlides2:ShopBannerSlides[];

@OneToMany(()=>ShopBannerSlides,shopBannerSlides=>shopBannerSlides.lastEditBy)


shopBannerSlides3:ShopBannerSlides[];

@OneToMany(()=>StructureHistory,structureHistory=>structureHistory.root)


structureHistories:StructureHistory[];

@OneToMany(()=>Sunnybooks,sunnybooks=>sunnybooks.account)


sunnybooks:Sunnybooks[];

@OneToMany(()=>SunriseActivities,sunriseActivities=>sunriseActivities.account)


sunriseActivities:SunriseActivities[];

@OneToMany(()=>Transactions,transactions=>transactions.receiverAccount)


transactions:Transactions[];

@OneToMany(()=>Transactions,transactions=>transactions.senderAccount)


transactions2:Transactions[];

@OneToMany(()=>UserNotifications,userNotifications=>userNotifications.account)


userNotifications:UserNotifications[];

@OneToMany(()=>VerifyActions,verifyActions=>verifyActions.account)


verifyActions:VerifyActions[];

@OneToMany(()=>WithdrawTransferGroups,withdrawTransferGroups=>withdrawTransferGroups.account)


withdrawTransferGroups:WithdrawTransferGroups[];

}
