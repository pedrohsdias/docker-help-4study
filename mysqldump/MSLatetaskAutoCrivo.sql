CREATE DATABASE MSLatetaskAutoCrivo;

use MSLatetaskAutoCrivo;

create table MSLatetaskAutoCrivo.jobs
(
    id           bigint unsigned auto_increment
        primary key,
    queue        varchar(255)     not null,
    payload      longtext         not null,
    attempts     tinyint unsigned not null,
    reserved_at  int unsigned     null,
    available_at int unsigned     not null,
    created_at   int unsigned     not null
);

create index jobs_queue_index
    on MSLatetaskAutoCrivo.jobs (queue);

create table tb_latetask_status
(
    id               int auto_increment
        primary key,
    descricao        varchar(50) null,
    tipo             varchar(25) null,
    data_hora_insert datetime    null,
    data_hora_update datetime    null
);

INSERT INTO MSLatetaskAutoCrivo.tb_latetask_status (id, descricao, tipo, data_hora_insert, data_hora_update) VALUES (6, 'Inativo', 'config', '2022-08-17 15:43:58', '2022-08-17 15:43:58');
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_status (id, descricao, tipo, data_hora_insert, data_hora_update) VALUES (5, 'Ativo', 'config', '2022-08-17 15:43:58', '2022-08-17 15:43:58');
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_status (id, descricao, tipo, data_hora_insert, data_hora_update) VALUES (4, 'Sucesso', 'agenda', '2022-08-17 15:43:58', '2022-08-17 15:43:58');
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_status (id, descricao, tipo, data_hora_insert, data_hora_update) VALUES (3, 'Falha', 'agenda', '2022-08-17 15:43:58', '2022-08-17 15:43:58');
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_status (id, descricao, tipo, data_hora_insert, data_hora_update) VALUES (2, 'Aguardando replay', 'agenda', '2022-08-17 15:43:58', '2022-08-17 15:43:58');
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_status (id, descricao, tipo, data_hora_insert, data_hora_update) VALUES (1, 'Aguardando cooldown', 'agenda', '2022-08-17 15:43:58', '2022-08-17 15:43:58');


create table tb_latetask_config
(
    id                      int auto_increment
        primary key,
    ek_produto_id           int          null,
    microservico_demandante varchar(50)  null,
    cooldown                int          null,
    replay                  int          null,
    fk_status_latetask      int          null,
    hora_util_inicio        int          null,
    hora_util_fim           int          null,
    data_hora_insert        datetime     null,
    data_hora_update        datetime     null,
    callback_url            varchar(100) null
);

INSERT INTO MSLatetaskAutoCrivo.tb_latetask_config (id, ek_produto_id, microservico_demandante, cooldown, replay, fk_status_latetask, hora_util_inicio, hora_util_fim, data_hora_insert, data_hora_update, callback_url) VALUES (2, 183, 'atpve', 24, 2, 5, 8, 18, '2022-10-11 11:33:21', '2022-10-11 11:33:21', 'http://159.65.241.106:6002/documento-intencao-venda/consultar-atpve');
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_config (id, ek_produto_id, microservico_demandante, cooldown, replay, fk_status_latetask, hora_util_inicio, hora_util_fim, data_hora_insert, data_hora_update, callback_url) VALUES (1, 182, 'crlv', 24, 2, 5, 8, 18, '2022-08-17 15:43:58', '2022-08-17 15:43:58', 'http://159.65.241.106:9103/api/');


create table tb_latetask_agenda
(
    id                 int auto_increment
        primary key,
    ek_produto_id      int        null,
    ek_extratos_id     int        null,
    ek_contrato_id     int        null,
    bilhetado          tinyint(1) null,
    fk_status_latetask int        null,
    data_hora_cooldown datetime   null,
    data_hora_insert   datetime   null,
    data_hora_update   datetime   null
);

INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (28, 182, 751, 1001, null, 3, '2022-10-26 10:16:55', '2022-10-25 10:16:55', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (27, 182, 750, 1001, null, 3, '2022-10-25 10:21:50', '2022-10-25 10:13:50', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (26, 183, 17, 1001, null, 3, '2022-10-24 08:39:00', '2022-10-21 17:39:00', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (25, 183, 19, 1001, null, 3, '2022-10-20 10:02:42', '2022-10-19 17:02:42', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (24, 183, 16, 1001, null, 4, '2022-10-19 10:54:04', '2022-10-19 10:08:04', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (18, 183, 18, 1001, null, 3, '2022-10-17 19:51:00', '2022-10-17 11:58:44', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (17, 182, 744, 1002, null, 3, '2022-09-15 08:33:50', '2022-09-12 20:33:50', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (16, 182, 743, 1002, null, 3, '2022-09-05 19:38:00', '2022-09-05 19:00:54', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (15, 182, 742, 1002, null, 3, '2022-09-05 19:31:00', '2022-09-05 18:55:55', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (14, 182, 736, 1002, null, 4, '2022-09-01 08:47:16', '2022-09-01 00:49:46', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (13, 182, 741, 1002, null, 4, '2022-09-01 08:47:16', '2022-09-01 00:35:01', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (12, 182, 739, 1002, null, 4, '2022-09-01 08:47:16', '2022-09-01 00:07:08', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (11, 182, 736, 1002, null, 4, '2022-09-01 08:47:16', '2022-08-31 16:12:29', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (10, 182, 736, 1002, null, 3, '2022-09-01 08:47:16', '2022-08-31 10:13:40', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (9, 182, 732, 1002, null, 4, '2022-09-01 08:47:16', '2022-08-30 11:04:19', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (8, 182, 732, 1002, null, 4, '2022-09-01 08:47:16', '2022-08-30 11:04:14', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (7, 182, 732, 1002, null, 4, '2022-09-01 08:47:16', '2022-08-30 11:02:40', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (6, 182, 732, 1002, null, 4, '2022-09-01 08:47:16', '2022-08-29 23:19:41', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (5, 182, 731, 1002, null, 4, '2022-09-01 08:47:16', '2022-08-29 23:12:47', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (4, 182, 736, 1002, null, 4, '2022-09-01 08:47:16', '2022-08-29 21:52:21', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (3, 182, 736, 1002, null, 4, '2022-09-01 08:47:16', '2022-08-29 21:47:16', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (2, 182, 736, 1002, 0, 4, '2022-09-01 08:47:16', '2022-08-29 21:45:11', null);
INSERT INTO MSLatetaskAutoCrivo.tb_latetask_agenda (id, ek_produto_id, ek_extratos_id, ek_contrato_id, bilhetado, fk_status_latetask, data_hora_cooldown, data_hora_insert, data_hora_update) VALUES (1, 182, 736, 1002, 0, 4, '2022-09-01 02:16:16', '2022-08-29 21:36:19', null);
