--Database: News Papaer webpage
--Table: 'login'
CREATE TABLE login_user
(
  `account_id` int(11) NOT NULL AUTO,
  `userid` varchar(24) NOT NULL default '',
  `user_pass` varchar(32) NOT NULL default '',
  `lastlogin` datetime NOT NULL default '0000-00-00 00:00:00',
  `email` varchar(40) NOT NULL default 'a@a.com',
  `error_message` varchar(40) NOT NULL default '',
  `connect_until` int(11) NOT NULL default '0',
  `memo` TEXT NOT NULL default '',
  INDEX (`account_id`),
  PRIMARY KEY  (`account_id`),
  KEY `name` (`userid`)
) TYPE=MyISAM =2000001;

--Database: News Paper Webpage
--Table: 'account_reg2_db'
CREATE TABLE `account_reg2_db`
(
  `account_id` int(11) NOT NULL default '0',
  `str` varchar(32) NOT NULL default '',
  `value` int(11) NOT NULL default '0',
  PRIMARY KEY (`account_id`, `str`)
) TYPE = MyISAM;

--Database: News Paper Webpage
--Table: 'sstatus'
CREATE TABLE `sstatus`
(
  `index` tinyint(4) NOT NULL default '0',
  `name` varchar(20) NOT NULL default '',
  `user` int(11) NOT NULL default '0'
) TYPE=MyISAM;

INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('1', 's1', 'p1', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('2', 's2', 'p2', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('3', 's3', 'p3', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('4', 's4', 'p4', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('5', 's5', 'p5', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('6', 's6', 'p6', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('7', 's7', 'p7', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('8', 's8', 'p8', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('9', 's9', 'p9', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('10', 's10', 'p10', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('11', 's11', 'p11', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('12', 's12', 'p12', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('13', 's13', 'p13', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('14', 's14', 'p14', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('15', 's15', 'p15', 'a@a.com');
INSERT INTO `login` (`account_id`, `userid`, `user_pass`, `email`) VALUES ('2000001', 'Test', 'Test', 'a@a.com', '99');
