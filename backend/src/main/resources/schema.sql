


-- 3. 확실한 경로에 users 테이블을 생성합니다.
CREATE TABLE users (
                       user_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '회원 식별자',
                       login_id VARCHAR(50) NOT NULL UNIQUE COMMENT '로그인 아이디',
                       password CHAR(60) NOT NULL COMMENT '암호화 비밀번호',
                       nickname VARCHAR(30) NOT NULL UNIQUE COMMENT '닉네임',
                       email VARCHAR(100) NULL UNIQUE COMMENT '이메일',
                       status VARCHAR(30) NOT NULL DEFAULT 'ACTIVE' COMMENT '회원 상태: ACTIVE/SUSPENDED/DELETED',
                       role VARCHAR(30) NOT NULL DEFAULT 'USER' COMMENT '회원 권한: USER/ADMIN/MASTER',
                       suspension_reason VARCHAR(500) NULL COMMENT '정지 사유',
                       created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '가입일',
                       updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일',
                       deleted_at DATETIME NULL DEFAULT NULL COMMENT '삭제일',
                       profile_img VARCHAR(500) NOT NULL DEFAULT '/images/default-profile.png' COMMENT '프로필 이미지 URL'
);

select * from esg_db;


create table allergy_tbl(
                            allergy_no int primary key auto_increment,#시퀀스 대신 auto_incrment
	allergy_name varchar(20) not null
);

select * from allergy_tbl;
INSERT INTO allergy_tbl (allergy_name) VALUES
                                           ('난류'),
                                           ('우유'),
                                           ('메밀'),
                                           ('대두'),
                                           ('땅콩'),
                                           ('호두'),
                                           ('잣'),
                                           ('밀'),
                                           ('고등어'),
                                           ('게'),
                                           ('새우'),
                                           ('돼지고기'),
                                           ('쇠고기'),
                                           ('닭고기'),
                                           ('복숭아'),
                                           ('토마토'),
                                           ('아황산류'),
                                           ('오징어'),
                                           ('조개류');

commit;