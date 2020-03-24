const data = `
a0107	十、治疗	X. Treatment	T1
a0108	（一）根据病情确定治疗场所。	1. Treatment venue determined by  the severity of the disease	T2
a0109	1.疑似及确诊病例应在具备有效隔离条件和防护条件的定点医院隔离治疗，疑似病例应单人单间隔离治疗，确诊病例可多人收治在同一病室。	1.1 Suspected and confirmed  cases should be isolated and treated at designated hospitals with effective  isolation, protection and prevention conditions in place. A suspect case  should be treated in isolation in a single room. Confirmed cases can be treated  in the same room.	P
a0110	2.危重型病例应当尽早收入ICU治疗。	1.2 Critical cases should be  admitted to ICU as soon as possible.	P
a0111	（二）一般治疗。	2. General treatment	T2
a0112	1.卧床休息，加强支持治疗，保证充分热量；注意水、电解质平衡，维持内环境稳定；密切监测生命体征、指氧饱和度等。	2.1 Letting patients rest in bed  and strengthening support therapy; ensuring sufficient caloric intake for  patients; monitoring their water and electrolyte balance to maintain internal  environment stability; closely monitoring vital signs and oxygen saturation.	P
a0113	2.根据病情监测血常规、尿常规、CRP、生化指标（肝酶、心肌酶、肾功能等）、凝血功能、动脉血气分析、胸部影像学等。有条件者可行细胞因子检测。	2.2 According to patients’  conditions, monitoring blood routine result, urine routine result, c-reactive  protein (CRP), biochemical indicators (liver enzyme, myocardial enzyme, renal  function etc.), coagulation function, arterial blood gas analysis, chest  imaging and cytokines detection if necessary.	P
a0114	3.及时给予有效氧疗措施，包括鼻导管、面罩给氧和经鼻高流量氧疗。有条件可采用氢氧混合吸入气（H2/O2：66.6%/33.3%）治疗。	2.3 Timely providing effective  oxygen therapy, including nasal catheter and mask oxygenation and nasal  high-flow oxygen therapy. If possible, inhalation of mixed hydrogen and  oxygen (H2/O2: 66.6%/33.3%) can be applied.	P
a0115	4.抗病毒治疗：可试用α-干扰素（成人每次500万U或相当剂量，加入灭菌注射用水2ml，每日2次雾化吸入）、洛匹那韦/利托那韦（成人200mg/50mg/粒，每次2粒，每日2次，疗程不超过10天)、利巴韦林（建议与干扰素或洛匹那韦/利托那韦联合应用，成人500mg/次，每日2至3次静脉输注，疗程不超过10天）、磷酸氯喹（18岁-65岁成人。体重大于50公斤者，每次500mg、每日2次，疗程7天；体重小于50公斤者，第一、二天每次500mg、每日2次，第三至第七天每次500mg、每日1次）、阿比多尔（成人200mg，每日3次，疗程不超过10天）。要注意上述药物的不良反应、禁忌症（如患有心脏疾病者禁用氯喹）以及与其他药物的相互作用等问题。在临床应用中进一步评价目前所试用药物的疗效。不建议同时应用3种及以上抗病毒药物，出现不可耐受的毒副作用时应停止使用相关药物。对孕产妇患者的治疗应考虑妊嫌周数，尽可能选择对胎儿影响较小的药物，以及是否终止妊娠后再进行治疗等问题，并知情告知。	2.4 Antiviral therapy: Hospitals  can try Alpha-interferon (5 million U or equivalent dose each time for  adults, adding 2ml of sterilized water, atomization inhalation twice daily),  lopinavir/ritonavir (200 mg/50mg per pill for adults, two pills each time,  twice daily, no longer than 10 days), Ribavirin (suggested to be used jointly  with interferon or lopinavir/ritonavir, 500 mg each time for adults, twice or  three times of intravenous injection daily, no longer than 10 days),  chloroquine phosphate (500 mg bid for 7 days for adults aged 18-65 with body  weight over 50 kg; 500 mg bid for Days 1&2 and 500 mg qd for Days 3-7 for  adults with body weight below 50 kg), Arbidol (200 mg tid for adults, no  longer than 10 days). Be aware of the adverse reactions, contraindications  (for example, chloroquine cannot be used for patients with heart diseases)  and interactions of the above-mentioned drugs. Further evaluate the efficacy  of those drugs currently being used. Using three or more antiviral drugs at  the same time is not recommend; if an intolerable toxic side effect occurs,  the respective drug should be discontinued. For the treatment of pregnant  women, issues such as the number of gestational weeks, choice of drugs having  the least impact on the fetus, as well as whether pregnancy being terminated  before treatment should be considered with patients being informed of these  considerations.	P
a0116	5.抗菌药物治疗：避免盲目或不恰当使用抗菌药物，尤其是联合使用广谱抗菌药物。	2.5 Antibiotic drug treatment:  Blind or inappropriate use of antibiotic drugs should be avoided, especially  in combination with broad-spectrum antibiotics.	P
a0117	（三）重型、危重型病例的治疗。	3. Treatment of severe and  critical cases	T2
a0118	1.治疗原则：	3.1 Treatment principle:	T3
a0119	在对症治疗的基础上，积极防治并发症，治疗基础疾病，预防继发感染，及时进行器官功能支持。	On the basis of symptomatic  treatment, complications should be proactively prevented, underlying diseases  should be treated, secondary infections also be prevented, and organ function  support should be provided timely.	P
a0120	2.呼吸支持：	3.2 Respiratory support:	T3
a0121	（1）氧疗：重型患者应当接受鼻导管或面罩吸氧，并及时评估呼吸窘迫和/或低氧血症是否缓解。	3.2.1 Oxygen therapy: Patients  with severe symptoms should receive nasal cannulas or masks for oxygen  inhalation and timely assessment of respiratory distress and/or hypoxemia  should be performed.	P
a0122	（2）高流量鼻导管氧疗或无创机械通气：当患者接受标准氧疗后呼吸窘迫和/或低氧血症无法缓解时，可考虑使用高流量鼻导管氧疗或无创通气。若短时间（1-2小时）内病情无改善甚至恶化，应当及时进行气管插管和有创机械通气。	3.2.2 High-flow nasal-catheter  oxygenation or noninvasive mechanical ventilation: When respiratory distress  and/or hypoxemia of the patient cannot be alleviated after receiving standard  oxygen therapy, high-flow nasal cannula oxygen therapy or non-invasive  ventilation can be considered. If conditions do not improve or even get worse  within a short time (1-2 hours), tracheal intubation and invasive mechanical  ventilation should be used in a timely manner.	P
a0123	（3）有创机械通气：采用肺保护性通气策略，即小潮气量（6-8ml/kg理想体重）和低水平气道平台压力（≤30cmH2O）进行机械通气，以减少呼吸机相关肺损伤。在保证气道平台压≤35cmH2O时，可适当采用高PEEP，保持气道温化湿化，避免长时问镇静，早期唤醒患者并进行肺康复治疗。较多患者存在人机不同步，应当及时使用镇静以及肌松剂。根据气道分泌物情况，选择密闭式吸痰，必要时行支气管镜检查采取相应治疗。	3.2.3 Invasive mechanical  ventilation: Lung protective ventilation strategy, namely low tidal volume  (6-8ml/kg of ideal body weight) and low level of airway platform pressure  (<30cmH2O) should be used to perform mechanical ventilation to reduce  ventilator-related lung injury. While the airway platform pressure maintained  ≤30cmH2O, high PEEP can be used to keep the airway warm and moist; avoid long  sedation and wake the patient early for lung rehabilitation. There are many  cases of human-machine asynchronization, therefore sedation and muscle  relaxants should be used in a timely manner. Use closed sputum suction  according to the airway secretion, if necessary, administer appropriate  treatment based on bronchoscopy findings.	P
a0124	（4）挽救治疗：对于严重ARDS患者，建议进行肺复张。在人力资源充足的情况下，每天应当进行12小时以上的俯卧位通气。俯卧位机械通气效果不佳者，如条件允许，应当尽快考虑体外膜肺氧合（ECMO）。其相关指征：①在FiO2>90%时，氧合指数小于80mmHg，持续3-4小时以上；②气道平台压≥35cmH2O。单纯呼吸衰竭患者，首选VV-ECMO模式；若需要循环支持，则选用VA-ECMO模式。在基础疾病得以控制，心肺功能有恢复迹象时，可开始撒机试验。	3.2.4 Rescue therapy: Pulmonary  re-tensioning is recommended for patients with severe ARDS. With sufficient  human resources, prone position ventilation should be performed for more than  12 hours per day. If the outcome of prone position ventilation is poor,  extracorporeal membrane oxygenation (ECMO) should be considered as soon as  possible. Indications include: ①When Fi02＞90%, the oxygenation index is less  than 80mmHg for more than 3-4 hours; ②For patients with only respiratory  failure when the airway platform pressure ≥ 35cmH2O, VV-ECMO mode is  preferred; if circulatory support is needed, VA-ECMO mode should be used.  When underlying diseases are under control and the cardiopulmonary function  shows signs of recovery, withdrawal of ECMO can be tried.	P
a0125	3.循环支持：	3.3 Circulatory support:	T3
a0126	在充分波体复苏的基础上，改善微循环，使用血管活性药物，密切监测患者血压、心率和尿量的变化，以及动脉血气分析中乳酸和碱剩余，必要时进行无创或有创血流动力学监测，如超声多普勒法、超声心动图、有创血压或持续心排血量（PiCCO）监测。在救治过程中，注意液体平衡策略，避免过量和不足。	On the basis of adequate fluid  resuscitation, efforts should be made to improve microcirculation, use  vasoactive drugs, closely monitor changes in blood pressure, heart rate and  urine volume as well as lactate and base excess in arterial blood gas analysis.  If necessary, use non-invasive or invasive hemodynamic monitor such as  Doppler ultrasound, echocardiography, invasive blood pressure or continuous  cardiac output (PiCCO) monitoring. In the process of treatment, pay attention  to the liquid balance strategy to avoid excessive or insufficient fluid  intake.	P
a0127	如果发现患者心率突发增加大于基础值的20%或血压下降大约基础值20%以上时，若伴有皮肤灌注不良和尿量减少等表现时，应密切观察患者是否存在胶毒症休克、消化道出血或心功能衰竭等情况。	If the heart rate suddenly  increases more than 20% of the basic value or the decrease of blood pressure  is more than 20% of the basic value with manifestations of poor skin  perfusion and decreased urine volume, make sure to closely observe whether  the patient has septic shock, gastrointestinal hemorrhage or heart failure.	P
a0128	4.肾功能衰竭和肾替代治疗：	3.4 Renal failure and renal  replacement therapy:	T3
a0129	危重症患者的肾功能损伤应积极寻找导致肾功能损伤的原因，如低灌注和药物等因素。对于肾功能衰竭患者的治疗应注重体液平衡、酸碱平衡和电解质平衡，在营养支持治疗方面应注意氮平衡、热量和微量元素等补充。重症患者可选择连续性肾替代治疗（continuous  renalreplacement therapy，CRRT）。其指征包括：①高钾血症；②酸中毒；③肺水肿或水负荷过重；④多器官功能不全时的液体管理。	Active efforts should be made to  look for causes for renal function damage in critical cases such as low  perfusion and drugs. For the treatment of patients with renal failure, focus  should be on the balance of body fluid, acid and base and electrolyte balance,  as well as on nutrition support including nitrogen balance and the  supplementation of energies and trace elements. For critical cases,  continuous renal replacement therapy (CRRT) can be used. The indications  include: ① hyperkalemia; ② acidosis; ③ pulmonary edema or water overload;  ④fluid management in multiple organ dysfunction.	P
a0130	5.康复者血浆治疗：	3.5 Convalescent plasma  treatment:	T3
a0131	适用于病情进展较快、重型和危重型患者。用法用量参考《新冠肺炎康复者恢复期血浆临床治疗方案（试行第二版）》。	It is suitable for patients with  rapid disease progression, severe and critically ill patients. Usage and  dosage should refer to Protocol of Clinical Treatment with Convalescent  Plasma for NCP Patients (2nd trial version).	P
a0132	6.血液净化治疗：	3.6 Blood purification  treatment:	T3
a0133	血液净化系统包括血浆置换、吸附、灌流、血液/血浆滤过等，能清除炎症因子，阻断“细胞因子风暴”，从而减轻炎症反应对机体的损伤，可用于重型、危重型惠者细胞因子风暴早中期的救治。	Blood purification system  including plasma exchange,absorption, perfusion and blood/plasma filtration  can remove inflammatory factors and block "cytokine storm", so as  to reduce the damage of inflammatory reactions to the body. It can be used for  the treatment of severe and critical cases in the early and middle stages of  cytokine storm.	P
a0134	7.免疫治疗：	3.7 Immunotherapy:	T3
a0135	对于双肺广泛病变者及重型患者，且实验室检测IL-6水平升高者，可试用托珠单抗治疗。首次剂量4-8mg/kg，推荐剂量为400mg、0.9%生理盐水稀释至100ml，输注时间大于1小时；首次用药疗效不佳者，可在12小时后追加应用一次（剂量同前），累计给药次数最多为2次，单次最大剂量不超过800mg。注意过敏反应，有结核等活动性感染者禁用。	For patients with extensive lung  lesions and severe cases who also show an increased level of IL-6 in  laboratory testing, Tocilizumab can be used for treatment. The initial dose  is 4-8mg/kg with the recommended dose of 400mg diluted with 0.9% normal saline  to 100ml. The infusion time should be more than 1 hour. If the initial  medication is not effective, one extra administration can be given after 12  hours (same dose as before). No more than two administrations should be given  with the maximum single dose no more than 800mg. Watch out for allergic  reactions. Administration is forbidden for people with active infections such  as tuberculosis.	P
a0136	8.其他治疗措施	3.8 Other therapeutic measures	T3
a0137	对于氧合指标进行性恶化、影像学进展迅速、机体炎症反应过度激活状态的患者，酌情短期内（3~5日）使用糖皮质激素，建议剂量不超过相当于甲泼尼龙1～2mg/kg/日，应当注意较大剂量糖皮质激素由于免疫抑制作用，会延缓对冠状病毒的清除；可静脉给予血必净100ml/次，每日2次治疗；可使用肠道微生态调节剂，维持肠道微生态平衡，预防继发细菌感染。	For patients with progressive  deterioration of oxygenation indicators, rapid progress in imaging and  excessive activation of the body's inflammatory response, glucocorticoids can  be used in a short period of time (three to five days). It is recommended that  dose should not exceed the equivalent of methylprednisolone 1-2 mg/kg/day.  Note that a larger dose of glucocorticoid will delay the removal of  coronavirus due to immunosuppressive effects. Xuebijing 100ml/time can be  administered intravenously twice a day. Intestinal microecological regulators  can be used to maintain intestinal microecological balance and prevent  secondary bacterial infections.	P
a0138	儿童重型、危重型病例可酌情考虑给予静脉滴注丙种球蛋白。	Child severe and critical cases  can be given intravenous infusion of γ-globulin.	P
a0139	患有重型或危重型新型冠状病毒肺炎的孕妇应积极终止妊娠，剖腹产为首选。	For pregnant severe and critical  cases, pregnancy should be terminated preferably with c-section.	P
a0140	患者常存在焦虑恐惧情绪，应当加强心理疏导。	Patients often suffer from  anxiety and fear and they should be supported by psychological counseling.	P
a0141	中医治疗	Traditional Chinese medicine (TCM) treatment	T1
a0142	本病属于中医“疫”病范畴，病因为感受“疫戾”之气，各地可根据病情、当地气候特点以及不同体质等情况，参照下列方案进行辨证论治。涉及到超药典剂量，应当在医师指导下使用。	The COVID-19 belongs to plague  in TCM with the etiology of epidemic factor exposure. Different regions can  refer to the following plans for syndrome differentiation and treatment,  according to the disease, local climate characteristics and different constitutions.  Prescriptions which exceed maximum dose according to pharmacopoeia should be  used under the guidance of a physician.	P
a0143	1.医学观察期	(1) Medical observation period	T2
a0144	临床表现1：乏力伴胃肠不适	1.1 Clinical manifestation:  fatigue with gastrointestinal discomfort	P
a0145	推荐中成药：藿香正气胶囊（丸、水、口服液）	Recommended Chinese patent  medicine: Huoxiang Zhengqi Capsule (Pill, Liquid, Oral liquid)	P
a0146	临床表现2：乏力伴发热	1.2 Clinical manifestation:  fatigue with fever	P
a0147	推荐中成药：金花清感颗粒、连花清癌胶囊（颗粒）、疏风解毒胶囊（颗粒）	Recommended Chinese patent  medicines: Jinhua Qinggan Granule, Lianhua Qingwen Capsule (Granule), Shufeng  Jiedu Capsule (Granule)	P
a0148	2.临床治疗期（确诊病例）	(2) Clinical treatment period (confirmed cases)	T2
a0149	2.1清肺排毒汤	1) Qingfei Paidu Decoction	T3
a0150	适用范围：结合多地医生临床观察，适用于轻型、普通型、重型患者，在危重型患者救治中可结合患者实际情况合理使用。	Scope of application: in  accordance with the clinical observations of doctors in various locations, it  is suitable for mild, moderate and severe cases, and can be used reasonably  with the consideration of the actual conditions of critically ill patients.	P
a0151	基础方剂：麻黄9g、炙甘草6g、杏仁9g、生石膏15～30g(先煎)、桂枝9g、泽泻9g、猪苓9g、白术9g、获苓15g、柴胡16g、黄芩6g、姜半夏9g、生姜9g、紫菀9g、冬花9g、射干9g、细辛6g、山药128、枳实6g、陈皮6g、藿香9g。	The basic prescription: Ma Huang  (Ephedrae Herba) 9g, Zhi Gan Cao (Glycyrrhizae Radix) 6g, Xing Ren  (Armeniacae Semen) 9g, Raw Shi Gao (Gypsum fibrosum) (decocted first) 15-30g,  Gui Zhi (Cinnamomi Ramulus) 9g, Ze Xie (Alismatis Rhizoma) 9g, Zhu Ling (Polyporus)  9g, Bai Zhu (Atractylodis macrocephalae Rhizoma) 9g, Fu Ling (Poria) 15g,  Chai Hu (Bupleuri Radix) 16g, Huang Qin (Scutellariae Radix) 6g, Jiang Ban  Xia (Pinellinae Rhizoma Praeparatum) 9g, Fresh ginger (Zingiberis Rhizoma  recens) 9g, Zi Wan (Asteris Radix) 9g, Kuan Dong Hua (Farfarae Flos) 9g, She  Gan (Belamcandae Rhizoma) 9g, Xi Xin (Asari Radix et Rhizoma) 6g, Shan Yao  (Dioscoreae Rhizoma) 12g, Zhi Shi (Aurantii Fructus immaturus) 6g, Chen Pi  (Citri reticulatae Pericarpium) 6g, Huo Xiang (Pogostemonis Herba) 9g.	P
a0152	服法：传统中药饮片，水煎服。每天一付，早晚各一次（饭后四十分钟），温服，三付一个疗程。	Administration: traditional  Chinese herbal pieces in decoction. One package per day. Take warm twice (40  minutes after meal in the morning and evening). One course of treatment is  for three packages.	P
a0153	如有条件，每次服光药可加服大米汤半碗，舌干津液亏虚者可多嚴至一碗。(注：如患者不发热则生石膏的用量要小，发热或壮热可加大生石膏用量）。若症状好转而未痊愈则服用第二个疗程，若患者有特殊情况或其他基础病，第二疗程可以根据实际情况修改处方，症状消失则停药。	If possible, half bowl of rice  soup after taking the decoction is advised. For the patients with dry tongue  due to fluid depletion, one bowl of rice soup is suggested. (Note: If no  fever, the dosage of gypsum should be reduced. In case with fever or high  fever, the amount of gypsum can be increased. If the symptoms improve but not  toally recovered, continue the second course of treatment. If the patient has  a special condition or other underlying diseases, the prescription can be  modified according to the actual situation in the second course. If the  symptoms disappear, the drug should be discontinued.	P
a0154	处方来源：国家卫生健康委办公厅国家中医药管理局办公室《关于推荐在中西医结合救治新型冠状病毒感染的肺炎中使用“清肺排毒汤”的通知》（国中医药办医政函（2020）22号）。	Reference: The General Office of  the National Health Commission of the people’s Republic of China The Office  of the National Administration of Traditional Chinese Medicine “Notice on  Recommending the Use of Qingfei Paidu Decoction in Pneumonia Treated with  Integrated Chinese and Western Medicine for the COVID-19 Infection” (National  Administration of Traditional Chinese Medicine Office Medical Letter [2020]  No.22)	P
a0155	2.2轻型	2) Mild case	T3
a0156	（1）寒湿郁肺证	① Cold-damp constraint in the lung pattern	T4
a0157	临床表现：发热，乏力，周身酸痛，咳嗽，咯痰，胸紧憋气，纳呆，恶心，呕吐，大便粘腻不爽。舌质淡胖齿痕或淡红，苔白厚腐腻或白腻，脉濡或滑。	Clinical manifestation: fever,  fatigue, generalized body aches, cough, expectoration, chest tightness and  labored breathing, poor appetite, nausea, vomiting and sticky stool, pale  enlarged tongue with tooth marks or light red tongue and coating which is white,  thick, curd-like, and greasy or white and greasy, and soggy of slippery  pulse.	P
a0158	推荐处方：生麻黄6g、生石膏15g、杏仁9g、羌活15g、葶苈子15g、贯众9g、地龙15g、徐长卿15g、藿香15g、佩兰9g、苍术15g、云苓45g、生白术30g、焦三仙各9g、厚朴15g、焦槟榔9g、煨草果9g、生姜15g。	Recommended prescription: Raw Ma  Huang (Ephedrae Herba) 6g, Ku Xing Ren (Armeniacae Semen) 15g, Raw Shi Gao  (Gypsum fibrosum) 30g, Raw Yi Yi Ren (Coicis Semen) 30g, Mao Cang Zhu  (Atractylodis Rhizoma) 10g, Guang Huo Xiang (Pogostemonis Herba) 15g, Qing Hao  Cao (Artemisiae annuae Herba) 12g, Hu Zhang (Polygoni cuspidati Rhizoma) 20g,  Ma Bian Cao (Verbenae Herba) 30g, Gan Lu Gen (Phragmitis Rhizoma) 30g, Ting  Li Zi (Lepidii/Descurainiae Semen) 15g, Hua Ju Hong (Citri grandis Exocarpium  rubrum) 15g, Raw Gan Cao (Glycyrrhizae Radix) 10g.	P
a0159	服法：每日1剂，水煎600ml，分3次服用，早中晚各1次，饭前服用。	Administration: one package daily, 400ml after decocting, and  equally divide into twice, in the morning and evening.	P
a0160	（2）湿热蕴肺证	② Cold-damp obstructing the lung pattern	T4
a0161	临床表现：低热或不发热，微恶寒，乏力，头身困重，肌肉酸痛，干咳痰少，咽痛，口干不欲多饮，或伴有胸闷脘痞，无汗或汗出不畅，或见呕恶纳呆，便溏或大便粘滞不爽。舌淡红，苔白厚腻或薄黄，脉滑数或濡。	Clinical manifestation:  low-grade fever, unsurfaced fever or no fever, dry cough with little sputum,  lassitude and fatigue, chest tightness, stomach discomfort, or nausea, and  loose stool. The tongue is pale or light red and coating is white or white  greasy. The pulse is soggy.	P
a0162	推荐处方：槟榔10g、草果10g、厚朴10g、知母10g、黄芩10g、柴胡10g、赤芍10g、连翘15g、青蒿10g（后下）、苍术10g、大青叶10g、生甘草5g。	Recommended prescription: Bing  Lang (Arecae Semen) 10g, Cao Guo (Tsaoko Fructus) 10g, Hou Po (Magnoliae  officinalis Cortex) 10g, Zhi Mu (Anemarrhenae Rhizoma) 10g, Huang Qin  (Scutellariae Radix) 10g, Chai Hu (Bupleuri Radix) 10g, Chi Shao (Paeoniae  Radix rubra) 10g, Lian Qiao (Forsythiae Fructus) 15g, Qing Hao (Artemisiae  annuae Herba) (added later) 10g, Cang Zhu (Atractylodis Rhizoma) 10g, Da Qjng  Ye (Isatidis Folium) 10g, Raw Gan Cao (Glycyrrhizae Radix) 5g.	P
a0163	服法：每日1剂，水煎400ml，分2次服用，早晚各1次。	Administration: one pack daily,  400ml after decocting, divide into twice, and half in the morning and half in  the evening.	P
a0164	2.3普通型	3) Moderate case	T3
a0165	（1）湿毒郁肺证	① Damp-toxin constraint in the lung pattern	T4
a0166	临床表现：发热，咳痰少，或有黄痰，憋闷气促，腹胀，便秘不畅。舌质暗红，舌体胖，苔黄腻或黄燥，脉滑数或弦滑。	Clinical manifestation: fever,  cough with little sputum or yellow sputum, chest tightness and shortness of  breath, abdominal distension, and constipation with difficult defecation. The  tongue body is dark-red, and tongue shape is enlarged. The cotaing is yellow  greasy or yellow dry. The pulse is slippery and rapid or wiry and slippery.	P
a0167	推荐处方：生麻黄6g、苦杏仁15g、生石膏30g、生薏苡仁30g、茅苍术10g、广藿香15g、青蒿草12g、虎杖20g、马鞭草30g、干芦根30g、葶苈子15g、化橘红15g、生甘草10g。	Recommended prescription: Raw Ma  Huang (Ephedrae Herba) 6g, Ku Xing Ren (Armeniacae Semen) 15g, Raw Shi Gao  (Gypsum fibrosum) 30g, Raw Yi Ni Ren (Coicis Semen) 30g, Mao Cang Zhu  (Atractylodis Rhizoma) 10g, Guang Huo Xiang (Pogostemonis Herba) 15g, Qing Hao  Cao (Artemisiae annuae Herba) 12g, Hu Zhang (Polygoni cuspidati Rhizoma) 20g,  Ma Bian Cao (Verbenae Herba) 30g, Gan Lu Gen (Phragmitis Rhizoma) 30g, Ting  Li Zi (Lepidii/Descurainiae Semen) 15g, Hua Ju Hong (Citri grandis Exocarpium  rubrum) 15g, Raw Gan Cao (Glycyrrhizae Radix) 10g.	P
a0168	服法：每日1剂，水煎400ml，分2次服用，早晚各1次。	Administration: one package  daily, 400ml after decocting, and equally divide into twice, in the morning  and evening.	P
a0169	（2）寒湿阻肺证	② Cold-damp obstructing the lung  pattern	T4
a0170	临床表现：低热，身热不扬，或未热，干咳，少痰，倦怠乏力，胸闷，脘痞，或呕恶，便溏。舌质淡或淡红，苔白或白腻，脉濡。	Clinical manifestation:  low-grade fever, unsurfaced fever or no fever, dry cough with little sputum,  lassitude and fatigue, chest tightness, stomach discomfort, or nausea, and  loose stool. The tongue is pale or light red and coating is white or white  greasy. The pulse is soggy.	P
a0171	推荐处方：苍术15g、陈皮10g、厚朴10g、藿香10g、草果6g、生麻黄6g、羌活10g、生姜10g、槟郎10g。	Recommended prescription: Cang  Zhu (Atractylodis Rhizoma) 15g, Chen Pi (Citri reticulatae Pericarpium) 10g,  Hou Pu (Magnoliae officinalis Cortex) 10g, Huo Xiang (Pogostemonis Herba)  10g, Cao Guo (Tsaoko Fructus) 6g, Raw Ma Huang (Ephedrae Herba) 6g, Qiang Huo  (Notopterygii Rhizoma seu Radix) 10g, Raw Jiang (Zingiberis Rhizoma recens)  10g, Bing Lang (Arecae Semen) 10g.	P
a0172	服法：每日1剂，水煎400m1，分2次服用，早晚各1次。	Administration: one package  daily, 400ml after decocting, and equally divide into twice, in the morning  and evening.	P
a0173	2.4重型	4) Severe case	T3
a0174	（1）疫毒闭肺证	① Epidemic toxin blocking the lung pattern	T4
a0175	临床表现：发热面红，咳啦，痰黄粘少，或痰中带血，喘悠气促，疲乏倦怠，口干苦粘，恶心不食，大便不畅，小便短赤。舌红，苍黄腻，脉滑数。	Clinical manifestation: fever  with red face, cough with little yellow and sticky sputum, or blood-stained  sputum, chest tightness and short of breath, lassitude, dryness, bitterness  and stickiness in the mouth, nausea and loss of appetite, difficult defecation,  and scanty dark urine. The tongue is red with yellow greasy coating. The  pulse is slippery and rapid.	P
a0176	推荐处方：化湿败毒方	Recommended prescription: Huashi Baidu prescription	P
a0177	基础方剂：生麻黄6g、杏仁9g、生石膏15g、甘草3g、藿香10g（后下)、厚朴10g、苍术15g、草果10g、法半夏9g、茯苓15g、生大黄5g（后下）、生黄芪10g、葶苈子10g、赤芍10g。	The basic prescription: Sheng Ma  Huang (Ephedrae Herba) 6g, Xing Ren (Armeniacae Semen) 9g, Sheng Shi Gao  (Gypsum fibrosum) 15g, Gan Cao (Glycyrrhizae Radix) 3g, Huo Xiang  (Pogostemonis Herba) (added later) 10g, Hou Po (Magnoliae officinalis Cortex)  10g, Cang Zhu (Atractylodis Rhizoma) 15g, Cao Guo (Tsaoko Fructus) 10g, Fa  Ban Xia (Pinellinae Rhizoma Praeparatum) 9g, Fu Ling (Poria) 15g, Sheng Da  Huang (Rhei Radix et Rhizoma) (added later) 5g, Sheng Huang Qi (Astragali  Radix) 10g, Ting Li Zi (Lepidii/Descurainiae Semen) 10g, Chi Shao (Paeoniae  Radix rubra) 10g.	P
a0178	服法：每日1~2剂，水煎服，每次100ml~200ml，一日2~4次，口服或鼻饲。	Administration: 1-2 packages  daily, decoction, 100-200ml each time, 2-4 times per day, oral administration  or nasal feeding.	P
a0179	（2）气营两燔证	② Blazing of both qi and ying pattern	T4
a0180	临床表现：大热烦渴，喘憋气促，谵语神昏，视物错瞀，或发斑疹，或吐血、衄血，或四肢抽搐。舌绛少苔或无苔，脉沉细数，或浮大而数。	Clinical manifestation: high  fever with polydipsia, tachypnoea and shortness of breath, delirium and  unconsciousness, blurred vision or accompanied with macules and papules, or  hematemesis, epistaxis or convulsion of the four limbs. The tongue is crimson  with little or no coating. The pulse is deep, thready and rapid, or floating,  large and rapid pulse.	P
a0181	推荐处方：生石膏30～60g（先煎)、知母30g、生地30~60g、水牛角30g（先煎）、赤芍30g、玄参30g、连翘15g、丹皮15g、黄连6g、竹叶12g、葶苈子15g、生甘草6g。	Recommended prescription: Raw  Shi Gao (Gypsum fibrosum) (decocted first) 30-60g, Zhi Mu (Anemarrhenae  Rhizoma) 30g, Sheng Di (Rehmanniae Radix) 30-60g, Shui Niu Jiao (Bubali  Cornu) (decocted first) 30g, Chi Shao (Paeoniae Radix rubra) 30g, Xuan Shen  (Scrophulariae Radix) 30g, Lian Qiao (Forsythiae Fructus) 15g, Dan Pi (Moutan  Cortex) 15g, Huang Lian (Coptidis Rhizoma) 6g, Zhu Ye (Phyllostachys nigrae  Folium) 12g, Ting Li Zi (Lepidii/Descurainiae Semen) 15g, Sheng Gan Cao  (Glycyrrhizae Radix) 6g.	P
a0182	服法：每日1剂，水煎服，先煎石膏、水牛角后下诸药，每次100ml～200ml，每日2~4次，口服或鼻饲。	Administration: one pack daily,  decoction, Shi Gao and Shui Niu Jiao should be decocted first, 100-200 ml  each time, 2-4 times per day, oral administration or nasal feeding.	P
a0183	推荐中成药：喜炎平注射液、血必净注射液、热毒宁注射液、痰热清注射液、醒脑静注射液。功效相近的药物根据个体情况可选择一种，也可根据临床症状联合使用两种。中药注射剂可与中药汤剂联合使用。	Recommended Chinese patent  medicines: Xiyanping injection, Xuebijing injection, Reduning injection,  Tanreqing injection, and Xingnaojing injection. Drugs with similar effects  can be selected according to individual conditions, or can be used in  combination according to clinical symptoms. Traditional Chinese medicine  injection can be used together with TCM decoction.	P
a0184	2.5危重型	5) Critical case	T3
a0185	内闭外脱证	① Internal blockage and external desertion pattern	T4
a0186	临床表现：呼吸困难、动辄气喘或需要机械通气，伴神昏，烦躁，汗出肢冷，舌质紫暗，苔厚腻或燥，脉浮大无根。	Clinical manifestation: Dyspnea,  panting on exertion or mechanical ventilation required, accompanied with  unconsciousness and dysphoria, sweating, cold extremities. The tongue is dark  and purple with thick greasy or dry coating. The pulse is floating and large  without root.	P
a0187	推荐处方：人参15g、黑顺片10g（先煎）、山茱萸15g，送服苏合香丸或安宫牛黄丸。	Recommended presicription: Take  Su He Xiang Wan or Angong Niuhuang Wan with the following decoction composed  of Ren Shen (Ginseng Radix) 15g, Hei Shun Pian (Aconiti Radix lateralis  praeparata) (decocted first) 10g, Shan Zhu Yu (Corni Fructus) 15g.	P
a0188	出现机械通气伴腹胀便秘或大便不畅者，可用生大黄5~10g。出现人机不同步情况，在镇静和肌松剂使用的情况下，可用生大黄5～10g和芒硝5～10g。	If there is mechanical  ventilation with abdominal distension, constipation or difficult defecation,  5-10g of Sheng Da Huang (Rhei Radix et Rhizoma) can be considered. If  patient-ventilator asynchrony occurs, 5-10g of Sheng Da Huang and 5-10g of  Mang Xiao (Natrii Sulfas) can be used together with sedation and muscle  relaxant.	P
a0189	推荐中成药：血必净注射液、热毒宁注射液、痰热清注射液、醒脑静注射液、参附注射液、生脉注射液、参麦注射液。功效相近的药物根据个体情况可选择一种，也可根据临床症状联合使用两种。中药注射剂可与中药汤剂联合使用。	Recommended Chinese patent  medicines: Xuebijing injection, Reduning injection, Tanreqing injection,  Xingnaojing injection, Shenfu injection, Shengmai injection, and Shenmai  injection. Drugs with similar effects can be selected according to individual  conditions, or can be used in combination according to clinical symptoms.  Traditional Chinese medicine injection can be used together with TCM  decoction.	P
a0190	注：重型和危重型中药注射剂推荐用法	Note: Recommended usage of TCM injections for severe and  critical cases	P
a0191	中药注射剂的使用遵照药品说明书从小剂量开始、逐步辨证调整的原则，推荐用法如下：	The use of TCM injections  follows the principle of starting from a small dosage and modifying based on  pattern identification in the instructions. The recommended usage is as  follows:	P
a0192	病毒感染或合并轻度细菌感染：0.9%氯化钠注射液250ml加喜炎平注射液100mg  bid，或0.9%氯化钠注射液250ml加热毒宁注射液20ml，或0.9%氯化钠注射液250ml加痰热清注射液40ml bid。	Viral infection or combined with  mild bacterial infection: 0.9% sodium chloride injection 250ml with Xiyanping  injection 100mg (bid), or 0.9% sodium chloride injection 250ml with Reduning  injection 20ml, or 0.9% sodium chloride injection 250ml with Tanreqing  injection 40ml (bid).	P
a0193	高热伴意识障碍：0.9%氯化钠注射液250ml加醒脑静注射液20ml  bid。	High fever with disturbance of  consciousness: 0.9% sodium chloride injection 250ml with Xingnaojing  injection 20ml (bid).	P
a0194	全身炎症反应综合征或/和多胜器功能衰竭：0.9%氯化钠注射液250ml加血必净注射液100ml  bid。	Systemic inflammatory response  syndrome (SIRS) or / and multiple organ failure (MOF): 0.9% sodium chloride  injection 250ml with Xuebijing injection 100ml (bid).	P
a0195	免疫抑制：葡萄糖注射液250ml加参麦注射液100ml或生脉注射液20~60ml  bid。	Immunosuppression: glucose injection 250ml with Shenmai  injection 100ml or Shengmai injection 20-60ml (bid).	P
a0196	2.6恢复期	6) Convalescence	T3
a0197	（1）肺脾气虚证	① Lung-spleen qi deficiency pattern	T4
a0198	临床表现：气短，倦怠乏力，纳差呕恶，痞满，大便无力，便溏不爽。舌淡胖，苔白腻。	Clinical manifestation:  shortness of breath, lassitude and fatigue, poor appetite with nausea and  vomiting, abdominal fullness, a sense of incomplete evacuation, and sticky  loose stool. The tongue is pale and enlarged with white greasy coating.	P
a0199	推荐处方：法半夏9g、陈皮10g、党参15g、炙黄芪30g、炒白术10g、茯苓15g、藿香10g、砂仁6g（后下）、甘草6g。	Recommended prescription: Fa Ban  Xia (Pinellinae Rhizoma Praeparatum) 9g, Chen Pi (Citri reticulatae  Pericarpium) 10g, Dang Shen (Codonopsis Radix) 15g, Zhi Huang Qi (Astragali  Radix) 30g, Chao Bai Zhu (Atractylodis macrocephalae Rhizoma) 10g, Fu Ling (Poria)  15g, Huo Xiang (Pogostemonis Herba) 10g, Sha Ren (AmomiFructus) (added later)  6g, Gan Cao (Glycyrrhizae Radix) 6g.	P
a0200	服法：每日1剂，水煎400ml，分2次服用，早晚各1次。	Administration: one package  daily, 400ml after decocting, and equally divide into twice in the morning  and evening.	P
a0201	（2）气阴两虚证	② Deficiency of both qi and yin pattern	T3
a0202	临床表现：乏力，气短，口干，口渴，心悸，汗多，纳差，低热或不热，干咳少痰。舌干少津，脉细或虚无力。	Clinical manifestation: fatigue,  shortness of breath, dry mouth, thirst, heart palpitation, profuse sweating,  poor appetite, low-grade fever or no fever, dry cough with little sputum. The  tongue is dry tongue with scanty fluid. The pulse is thready or weak and  forceless.	P
a0203	推荐处方：南北沙参各10g、麦冬15g、西洋参6g，五味子6g、生石膏15g、淡竹叶10g、桑叶10g、芦根15g、丹参15g、生甘草6g。	Recommended prescription: Nan  Sha Shen (Adenophorae Radix) 10g, Bei Sha Shen (Glehniae Radix) 10g, Mai Dong  (Ophiopogonis Radix) 15g, Xi Yang Shen (Panacis quinquefolii Radix) 6g, Wu  Wei Zi (Schisandrae Fructus) 6g, Sheng Shi Gao (Gypsum fibrosum) 15g, Dan Zhu  Ye (Lophatheri Herba) 10g, Sang Ye (Mori Folium) 10g, Lu Gen (Phragmitis  Rhizoma) 15g, Dan Shen (Salviae miltiorrhizae Radix) 15g, Sheng Gan Cao  (Glycyrrhizae Radix) 6g.	P
a0204	服法：每日1剂，水煎400ml，分2次服用，早晚各1次。	Administration: one package  daily, 400ml after decocting, and equally divide into twice in the morning  and evening.	P
a0205	十一、出院标准和出院后注意事项	XI. Discharge criteria and  after-discharge considerations	T1
a0206	（一）出院标准。	1.Discharge criteria	T2
a0207	1.体温恢复正常3天以上；	1) Body temperature is back to  normal for more than three days;	P
a0208	2.呼吸道症状明显好转；	2) Respiratory symptoms improve  obviously;	P
a0209	3.肺部影像学显示急性渗出性病变明显改善；	3) Pulmonary imaging shows  obvious absorption of inflammation,	P
a0210	4.连续两次痰、鼻咽拭子等呼吸道标本核酸检测阴性（采样时间至少间隔24小时）。	4) Nuclei acid tests negative  twice consecutively on respiratory tract samples such as sputum and  nasopharyngeal swabs (sampling interval being at least 24 hours).	P
a0211	满足以上条件者可出院。	Those who meet the above  criteria can be discharged.	P
a0212	（二）出院后注意事项。	2. After-discharge  considerations	T2
a0213	1.定点医院要做好与患者居住地基层医疗机构间的联系，共享病历资料，及时将出院患者信息推送至患者辖区或居住地居委会和基层医疗卫生机构。	2.1 The designated hospitals  should contact the primary healthcare facilities where the patients live and  share patients’ medical record, to send the information of the discharged  patients to the community committee and primary healthcare facility where the  patients reside.	P
a0214	2.患者出院后，建议应继续进行14天的隔离管理和健康状况监测，俱戴口罩，有条件的居住在通风良好的单人房间，减少与家人的近距离密切接触，分餐饮食，做好手卫生，避免外出活动。	2.2. After discharge, it is  recommended for patients to monitor their own health status in isolation for  14 days, wear a mask, live in well-ventilated single room if possible, reduce  close contact with family members, separate dinning, practice hand hygiene  and avoid going out.	P
a0215	3.建议在出院后第2周和第4周到医院随访、复诊。	2.3 It is recommended for the  patients to return to the hospitals for follow-up and re-visit in two and  four weeks after discharge.	P
`;


module.exports = data;

