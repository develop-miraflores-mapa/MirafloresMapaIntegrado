CREATE SCHEMA "mapa";

CREATE TABLE "mapa"."camaras"
(
   num_camara int PRIMARY KEY NOT NULL,
   nombre varchar(500),
   ip varchar(300),
   mac varchar(200),
   modelo varchar(150),
   serie varchar(100),
   tipo varchar(100),
   ubicacion varchar(500),
   coordenadas varchar(500),
   estado varchar(50)
);

CREATE TABLE "mapa"."cambiasta_map"
(
   id int PRIMARY KEY NOT NULL,
   expediente varchar(100),
   resolucion varchar(100),
   codigo varchar(20),
   contribuyente varchar(300),
   dni varchar(50),
   direccion_venta varchar(500),
   dias_atencion varchar(300),
   horario_atencion varchar(100),
   latitud varchar(100),
   longitud varchar(100),
   estado varchar(1),
   num_placa varchar(50),
   num_doc_ident varchar(20),
   imei varchar(50),
   fecha_hora_registro timestamp,
   velocidad numeric(19),
   direccion varchar(450),
   orientacion numeric(19),
   id_alerta int,
   des_alerta varchar(350),
   tipo varchar(1)
);
CREATE TABLE "mapa"."geo_incidencia_map"
(
   id_incidencia int PRIMARY KEY NOT NULL,
   id_evento int,
   tipo_evento int,
   sub_tipo int,
   fec_hora_inicio timestamp,
   fec_hora_fin timestamp,
   descripcion varchar(3000),
   severidad varchar(400),
   calle varchar(400),
   tipo_direccion int,
   direccion_final varchar(500),
   nombre_calle_inicio varchar(500),
   nombre_calle_fin varchar(500),
   fec_registra timestamp,
   fec_modifica timestamp,
   des_usu_registra varchar(250),
   des_usu_modifica varchar(250),
   des_ip_registra varchar(250),
   des_ip_modifica varchar(250),
   id_tipo_via int,
   cuadra_evento int,
   id_via int,
   id_caso_voxiva int,
   tipo_caso_voxiva int,
   sub_tipo_caso_voxiva int,
   tipo_incidencia int,
   id_via_catastro int,
   id_tipo_via_catastro int,
   estado varchar(1),
   tipo_cierre varchar(1),
   des_callles varchar(700),
   usuario_registro int,
   usuario_modifica int,
   visible varchar(1),
   id_dispositivo varchar(150),
   hora_llamada_voxiva varchar(60),
   nombre_reporta_incidencia varchar(350),
   direccion_incidencia varchar(500),
   acciones_incidencia varchar(2500),
   nombre_recepciona_incidencia varchar(350),
   dni_recepciona_incidencia varchar(15),
   nro_caso_voxiva varchar(35),
   telef_reporta_incidencia varchar(50),
   incidencia_presentada varchar(1500),
   medio_ingreso int,
   estado_calif_voxiva varchar(10),
   estado_voxiva varchar(10),
   des_estado_voxiva varchar(350),
   sub_estado_voxiva varchar(10),
   des_sub_estado_voxiva varchar(350),
   des_estado_calif_voxiva varchar(350),
   unid_interv_voxiva varchar(10),
   des_unid_interv_voxiva varchar(350),
   importante_voxiva varchar(1),
   llamada_devuelta_voxiva varchar(1),
   fecha_hora_atencion_voxiva varchar(50),
   ind_leido varchar(1),
   cod_unidad int,
   cod_caso int,
   cod_subcaso int,
   cod_medio int,
   cod_situacion int,
   nomb_report varchar(200),
   telf_report varchar(15),
   cod_geometria int,
   coordenadas varchar(200),
   direccion varchar(500),
   cdra int,
   dpto varchar(10),
   zona varchar(40),
   subzona varchar(40),
   descripcion2 varchar(1000),
   fec_evento date,
   hor_evento varchar(5),
   fec_atencion date,
   hor_atencion varchar(5),
   cod_severidad int,
   cod_estado int,
   cod_subestado int,
   cod_modalidad int,
   motivo varchar(100),
   tpo_hallazgo int,
   desc_sospechoso varchar(400),
   est_reg varchar(1),
   fec_creacion timestamp,
   fec_cierre timestamp
)
;
CREATE UNIQUE INDEX geo_incidencia_map_pkey ON "mapa"."geo_incidencia_map"(id_incidencia)
;
CREATE TABLE "mapa"."geo_info_pos"
(
   id_pos int PRIMARY KEY NOT NULL,
   id_disp int,
   cod_comer int,
   nomb_comer varchar(200),
   desc_giro varchar(200),
   dir_comer varchar(200),
   latitud varchar(100),
   longitud varchar(100),
   flg_portatil varchar(1),
   flg_alerta varchar(1),
   fec_ultima timestamp,
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX geo_info_pos_pkey ON "mapa"."geo_info_pos"(id_pos)
;
CREATE TABLE "mapa"."geo_info_tetra"
(
   issi int PRIMARY KEY NOT NULL,
   id_info int,
   nro_asignacion int,
   area varchar(200),
   nro_interno varchar(500),
   tipo_vehiculo varchar(100),
   marca_vehiculo varchar(100),
   modelo_vehiculo varchar(100),
   placa char(25),
   tipo_radio varchar(50),
   modelo_radio varchar(50),
   zona varchar(30),
   sub_zona varchar(30)
)
;
CREATE UNIQUE INDEX geo_info_tetra_pkey ON "mapa"."geo_info_tetra"(issi)
;
CREATE TABLE "mapa"."geo_info_vigilantes"
(
   id int PRIMARY KEY NOT NULL,
   nombre_completo varchar(500),
   dni varchar(150),
   prestacion_servicio varchar(500),
   telefono varchar(150),
   cargo varchar(200),
   area varchar(100),
   sub_zona varchar(50),
   turno varchar(150),
   cordenadas varchar(600)
)
;
CREATE UNIQUE INDEX geo_info_vigilantes_pkey ON "mapa"."geo_info_vigilantes"(id)
;
CREATE TABLE "mapa"."geo_map_alerta"
(
   id_incidencia int PRIMARY KEY NOT NULL,
   desc_medio varchar(100),
   desc_unidad varchar(100),
   desc_caso varchar(100),
   desc_subcaso varchar(100),
   fec_evento timestamp,
   hora_evento varchar(10),
   coordenadas varchar(200),
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX geo_map_alerta_pkey ON "mapa"."geo_map_alerta"(id_incidencia)
;
CREATE TABLE "mapa"."geo_map_auditoria"
(
   id int PRIMARY KEY NOT NULL,
   tipo varchar(2500),
   valor varchar(2500),
   fec_registra timestamp,
   des_ip_registra varchar(250),
   cod_perfil int,
   cod_rol int
)
;
CREATE UNIQUE INDEX geo_map_auditoria_pkey ON "mapa"."geo_map_auditoria"(id)
;
CREATE TABLE "mapa"."geo_map_bitacora"
(
   id_bitacora int PRIMARY KEY NOT NULL,
   id_incidencia int,
   fecha timestamp,
   descripcion varchar(2000),
   usuario varchar(250),
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX geo_map_bitacora_pkey ON "mapa"."geo_map_bitacora"(id_bitacora)
;
CREATE TABLE "mapa"."geo_map_camara"
(
   id_cam int PRIMARY KEY NOT NULL,
   nombre varchar(500),
   ip varchar(300),
   mac varchar(200),
   model varchar(150),
   serie varchar(100),
   tipo varchar(100),
   ubicacion varchar(500),
   coordenadas varchar(500),
   area varchar(10),
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX geo_map_camara_pkey ON "mapa"."geo_map_camara"(id_cam)
;
CREATE TABLE "mapa"."geo_map_caso"
(
   cod_caso int PRIMARY KEY NOT NULL,
   cod_unidad int,
   desc_caso varchar(200),
   est_reg varchar(1)
)
;
ALTER TABLE "mapa"."geo_map_caso"
ADD CONSTRAINT cod_unidad
FOREIGN KEY (cod_unidad)
REFERENCES "mapa"."geo_map_unidad"(cod_unidad)
;
CREATE UNIQUE INDEX caso_pkey ON "mapa"."geo_map_caso"(cod_caso)
;
CREATE TABLE "mapa"."geo_map_contenedor"
(
   id_cont int PRIMARY KEY NOT NULL,
   telf varchar(15),
   x varchar(100),
   y varchar(100),
   nombre varchar(100),
   estado varchar(10),
   fec_reg timestamp,
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX geo_map_contenedor_pkey ON "mapa"."geo_map_contenedor"(id_cont)
;
CREATE TABLE "mapa"."geo_map_contenedor_log"
(
   id_log int PRIMARY KEY NOT NULL,
   id_cont int,
   estado varchar(10),
   fecha timestamp
)
;
CREATE UNIQUE INDEX geo_map_contenedor_log_pkey ON "mapa"."geo_map_contenedor_log"(id_log)
;
CREATE TABLE "mapa"."geo_map_estadistica"
(
   id int PRIMARY KEY NOT NULL,
   id_incidencia int,
   nro_caso_voxiva int,
   id_voxiva int,
   cod_unidad int,
   cod_caso int,
   cod_subcaso int,
   fecha timestamp,
   hora int,
   dia int,
   mes int,
   anio int,
   nomb_dia varchar(20),
   nomb_mes varchar(20),
   valor int,
   cod_estado int,
   cod_subestado int,
   area varchar(4),
   zona varchar(20),
   subzona varchar(20),
   tpo_via varchar(20),
   nomb_via varchar(100),
   cdra varchar(4),
   coordenadas varchar(200),
   longitud varchar(100),
   latitud varchar(100),
   desc_unidad varchar(200),
   desc_caso varchar(200),
   desc_subcaso varchar(200)
)
;
CREATE UNIQUE INDEX geo_map_estadistica_pkey ON "mapa"."geo_map_estadistica"(id)
;
CREATE INDEX idx_estadistica_dia ON "mapa"."geo_map_estadistica"(dia)
;
CREATE INDEX idx_estadistica_zona ON "mapa"."geo_map_estadistica"(zona)
;
CREATE INDEX idx_estadistica_fecha ON "mapa"."geo_map_estadistica"(fecha)
;
CREATE INDEX idx_estadistica_cod_caso ON "mapa"."geo_map_estadistica"(cod_caso)
;
CREATE INDEX idx_estadistica_mes ON "mapa"."geo_map_estadistica"(mes)
;
CREATE INDEX idx_estadistica_hora ON "mapa"."geo_map_estadistica"(hora)
;
CREATE INDEX idx_estadistica_anio ON "mapa"."geo_map_estadistica"(anio)
;
CREATE INDEX idx_estadistica_cod_unidad ON "mapa"."geo_map_estadistica"(cod_unidad)
;
CREATE INDEX idx_estadistica_id_incidencia ON "mapa"."geo_map_estadistica"(id_incidencia)
;
CREATE TABLE "mapa"."geo_map_generico"
(
   id int PRIMARY KEY NOT NULL,
   geometria varchar(3600),
   nombre varchar(300),
   nombre_via varchar(600),
   numero varchar(500),
   letra varchar(500),
   interior varchar(400),
   giro varchar(400),
   publico varchar(25),
   zona varchar(50),
   tipo int,
   punto_ini varchar(100),
   punto_fin varchar(100),
   tramo varchar(10),
   via_ini varchar(250),
   via_fin varchar(250),
   sentido varchar(100),
   percentil varchar(50),
   limite varchar(100),
   espacios varchar(100),
   sector varchar(50),
   cuadra varchar(50),
   lado varchar(50),
   hora_paso_promedio varchar(450),
   detalle varchar(4000)
)
;
CREATE UNIQUE INDEX geo_map_generico_pkey ON "mapa"."geo_map_generico"(id)
;
CREATE TABLE "mapa"."geo_map_incidencia"
(
   id_incidencia int PRIMARY KEY NOT NULL,
   cod_unidad int,
   cod_caso int,
   cod_subcaso int,
   cod_medio int,
   cod_situacion int,
   desc_unidad varchar(100),
   desc_caso varchar(100),
   desc_subcaso varchar(100),
   desc_medio varchar(100),
   desc_situacion varchar(50),
   cod_unid_report int,
   nomb_report varchar(300),
   telf_report varchar(15),
   dir_report varchar(500),
   cext_report varchar(50),
   cod_nac_report int,
   cod_geometria int,
   coordenadas varchar(200),
   cod_tpo_via int,
   desc_tpo_via varchar(50),
   desc_via varchar(100),
   cdra varchar(4),
   dpto varchar(10),
   zona varchar(20),
   subzona varchar(20),
   descripcion varchar(3100),
   fec_notificacion timestamp,
   fec_evento timestamp,
   fec_atencion timestamp,
   fec_cierre timestamp,
   cod_severidad int,
   cod_estado int,
   cod_subestado int,
   cod_modalidad int,
   cod_motivo int,
   desc_motivo varchar(100),
   tpo_hallazgo varchar(1),
   tpo_sexo varchar(1),
   est_reg varchar(1),
   nro_caso_voxiva int,
   tipo_voxiva varchar(50),
   subtipo_voxiva varchar(50),
   tiempo_cierre varchar(50),
   area varchar(8),
   cod_disp_origen int,
   desc_disp_origen varchar(50),
   flg_heridos varchar(1),
   flg_callback varchar(1),
   visible varchar(1),
   usr_registra varchar(250),
   usr_modifica varchar(250),
   ind_leido varchar(1),
   tpo_operador int,
   flg_reasignado varchar(1),
   url_audio varchar(250),
   param1 text,
   param2 text,
   numero varchar(10),
   cod_area int,
   cod_zona int,
   cod_subzona int
)
;
CREATE UNIQUE INDEX geo_map_incidencia_pkey ON "mapa"."geo_map_incidencia"(id_incidencia)
;
CREATE TABLE "mapa"."geo_map_inicidencia_linea"
(
   id_linea int PRIMARY KEY NOT NULL,
   point_ini varchar(300),
   point_fin varchar(300),
   des_calle varchar(600),
   intercepcion_1 varchar(500),
   intercepcion_2 varchar(500),
   id_incidencia int NOT NULL,
   dir_cardinal varchar(400)
)
;
CREATE UNIQUE INDEX geo_map_inicidencia_linea_pkey ON "mapa"."geo_map_inicidencia_linea"(id_linea)
;
CREATE TABLE "mapa"."geo_map_inicidencia_schedule"
(
   id int PRIMARY KEY NOT NULL,
   id_incidencia int,
   hora_inicio varchar(100),
   hora_fin varchar(100),
   des_dia varchar(100),
   fec_registra timestamp,
   estado varchar(1)
)
;
CREATE UNIQUE INDEX geo_map_inicidencia_schedule_pkey ON "mapa"."geo_map_inicidencia_schedule"(id)
;
CREATE TABLE "mapa"."geo_map_interviniente"
(
   cod_interv int PRIMARY KEY NOT NULL,
   id_incidencia int,
   cod_tpo_interv int,
   cod_tpo_puesto int,
   desc_tpo_interv varchar(20),
   desc_tpo_puesto varchar(100),
   nomb_interv varchar(200),
   apoyo_policial varchar(200),
   est_reg varchar(1),
   info_interv varchar(2000)
)
;
CREATE UNIQUE INDEX geo_map_interviniente_pkey ON "mapa"."geo_map_interviniente"(cod_interv)
;
CREATE TABLE "mapa"."geo_map_involucrado"
(
   cod_involuc int PRIMARY KEY NOT NULL,
   id_incidencia int,
   cod_tpo_involuc int,
   cod_tpo_doc int,
   desc_tpo_involuc varchar(50),
   desc_tpo_doc varchar(50),
   nomb_involuc varchar(200),
   edad_involuc varchar(2),
   num_doc_involuc varchar(15),
   desc_observ varchar(1000),
   cod_vehic int,
   cod_clase_vehic int,
   cod_marca_vehic int,
   cod_color_vehic int,
   clase_vehic varchar(20),
   marca_vehic varchar(20),
   model_vehic varchar(20),
   placa_vehic varchar(20),
   color_vehic varchar(20),
   anio_vehic varchar(4),
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX geo_map_involucrado_pkey ON "mapa"."geo_map_involucrado"(cod_involuc)
;
CREATE TABLE "mapa"."geo_map_maestro_tipo"
(
   cod_tipo int PRIMARY KEY NOT NULL,
   cod_tpo_padre int,
   desc_tipo varchar(80),
   id_tb_ctlmgpoele int,
   id_tb_ctlmelecgo int,
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX geo_map_maestro_tipo_pkey ON "mapa"."geo_map_maestro_tipo"(cod_tipo)
;
CREATE TABLE "mapa"."geo_map_opcion"
(
   id_opcion int PRIMARY KEY NOT NULL,
   nombre varchar(300),
   definicion varchar(200),
   fec_registra timestamp,
   fec_modifica timestamp,
   des_usu_registra varchar(250),
   des_usu_modifica varchar(250),
   des_ip_registra varchar(250),
   des_ip_modifica varchar(250)
)
;
CREATE UNIQUE INDEX geo_map_opcion_pkey ON "mapa"."geo_map_opcion"(id_opcion)
;
CREATE TABLE "mapa"."geo_map_subcaso"
(
   cod_subcaso int PRIMARY KEY NOT NULL,
   cod_caso int,
   desc_subcaso varchar(200),
   est_reg varchar(1)
)
;
ALTER TABLE "mapa"."geo_map_subcaso"
ADD CONSTRAINT subcaso_cod_caso_fkey
FOREIGN KEY (cod_caso)
REFERENCES "mapa"."geo_map_caso"(cod_caso)
;
ALTER TABLE "mapa"."geo_map_subcaso"
ADD CONSTRAINT cod_caso
FOREIGN KEY (cod_caso)
REFERENCES "mapa"."geo_map_caso"(cod_caso)
;
CREATE UNIQUE INDEX subcaso_pkey ON "mapa"."geo_map_subcaso"(cod_subcaso)
;
CREATE TABLE "mapa"."geo_map_unidad"
(
   cod_unidad int PRIMARY KEY NOT NULL,
   desc_unidad varchar(200),
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX unidad_pkey ON "mapa"."geo_map_unidad"(cod_unidad)
;
CREATE TABLE "mapa"."geo_map_usuario"
(
   ide_usuario int PRIMARY KEY NOT NULL,
   ide_estado int,
   des_login_user varchar(250),
   clv_clave_user varchar(250),
   ide_rol int,
   ide_persona int,
   fec_registra timestamp,
   fec_modifica timestamp,
   des_usu_registra varchar(250),
   des_usu_modifica varchar(250),
   des_ip_registra varchar(250),
   des_ip_modifica varchar(250),
   in_cuenta_expirada char(1),
   in_cuenta_bloqueada char(1),
   in_credencial_expirada char(1),
   in_habilitado char(1),
   des_parametro1 varchar(20),
   des_ruta_signpfx varchar(250),
   des_ruta_signimage varchar(250),
   des_nombre_completo varchar(350),
   email varchar(500),
   dni varchar(50),
   flg_usr varchar(1),
   area int,
   ide_rol_rol int
)
;
CREATE UNIQUE INDEX geo_map_usuario_pkey ON "mapa"."geo_map_usuario"(ide_usuario)
;
CREATE TABLE "mapa"."geo_map_usuario_opcion"
(
   id int PRIMARY KEY NOT NULL,
   ide_usuario int NOT NULL,
   id_opcion int NOT NULL
)
;
CREATE UNIQUE INDEX geo_map_usuario_opcion_pkey ON "mapa"."geo_map_usuario_opcion"(id)
;
CREATE TABLE "mapa"."geo_map_vehiculo"
(
   cod_vehic int PRIMARY KEY NOT NULL,
   id_incidencia int,
   cod_clase_vehic int,
   cod_marca_vehic int,
   cod_color_vehic int,
   clase_vehic varchar(20),
   marca_vehic varchar(20),
   model_vehic varchar(20),
   placa_vehic varchar(20),
   color_vehic varchar(20),
   anio_vehic varchar(4),
   est_reg varchar(1)
)
;
CREATE UNIQUE INDEX geo_map_vehiculo_pkey ON "mapa"."geo_map_vehiculo"(cod_vehic)
;
CREATE TABLE "mapa"."geomgeometria"
(
   idgeoreferencia int PRIMARY KEY NOT NULL,
   idetipogeometria int,
   geometria varchar(1500),
   idecodvalor int,
   idecodident int,
   indestado int,
   desdireccion varchar(500),
   orden int
)
;
CREATE UNIQUE INDEX geomgeometria_pkey ON "mapa"."geomgeometria"(idgeoreferencia)
;
CREATE TABLE "mapa"."parametro_sistema"
(
   idparametrosistema varchar(50) PRIMARY KEY NOT NULL,
   valor varchar(80) NOT NULL,
   codaplicacion varchar(10) NOT NULL
)
;
CREATE UNIQUE INDEX parametro_sistema_pkey ON "mapa"."parametro_sistema"(idparametrosistema)
;
CREATE TABLE "mapa"."pre_inscripcion_cierre_calle"
(
   id int PRIMARY KEY NOT NULL,
   direccion varchar(650),
   cuadra varchar(50),
   motivo varchar(800),
   empresa varchar(400),
   ident_grupo int,
   estado int,
   fec_registro timestamp,
   fec_modificacion timestamp,
   ip_registro varchar(400),
   ip_modificacion varchar(400),
   num_expediente varchar(100),
   anio_expediente int,
   id_referencia int,
   mas_una_direccion varchar(1),
   gid int
)
;
CREATE UNIQUE INDEX pre_inscripcion_cierre_calle_pkey ON "mapa"."pre_inscripcion_cierre_calle"(id)
;
CREATE TABLE "mapa"."reach_feed"
(
   id int PRIMARY KEY NOT NULL,
   incident_type varchar(100),
   description varchar(800),
   ext_code varchar(100),
   private_notes varchar(600),
   location_lat varchar(100),
   location_lng varchar(100),
   location_address varchar(600),
   location_cnc varchar(100),
   location_datetime varchar(100),
   road_type varchar(100),
   state varchar(100),
   anonymous varchar(100),
   estado_atencion varchar(100),
   fecha timestamp
)
;
CREATE UNIQUE INDEX reach_feed_pkey ON "mapa"."reach_feed"(id)
;
CREATE TABLE "mapa"."telefono"
(
   telefono varchar(15) PRIMARY KEY NOT NULL,
   asociado varchar(300)
)
;
CREATE UNIQUE INDEX telefono_pkey ON "mapa"."telefono"(telefono)
;
CREATE TABLE "mapa"."tipificacion"
(
   unidad int,
   desc_unidad text,
   caso int,
   desc_caso text,
   subcaso int,
   desc_subcaso text,
   tipif int,
   tipif_vox text,
   tipif_reach varchar(500)
)
;
CREATE TABLE "mapa"."user_roles"
(
   user_role_id int PRIMARY KEY NOT NULL,
   username varchar(45) NOT NULL,
   role varchar(45) NOT NULL
)
;
CREATE UNIQUE INDEX user_roles_pkey ON "mapa"."user_roles"(user_role_id)
;
CREATE TABLE "mapa"."users"
(
   username varchar(45) PRIMARY KEY NOT NULL,
   password varchar(45) NOT NULL,
   enabled int NOT NULL
)
;
CREATE UNIQUE INDEX users_pkey ON "mapa"."users"(username)
;
CREATE TABLE "mapa"."zonificacion"
(
   cod_subzona int PRIMARY KEY NOT NULL,
   desc_subzona varchar(20),
   cod_zona int,
   desc_zona varchar(20),
   cod_area int,
   desc_area varchar(20)
)
;
CREATE UNIQUE INDEX zonificacion_pkey ON "mapa"."zonificacion"(cod_subzona)
;



CREATE SCHEMA "histomapa";
CREATE SCHEMA "histotetra";

CREATE TABLE "histomapa"."estadistica"
(
   id_estad int PRIMARY KEY NOT NULL,
   id_incidencia int,
   fecha timestamp,
   cod_unidad int,
   desc_unidad varchar(100),
   cod_caso int,
   desc_caso varchar(100),
   cod_subcaso int,
   desc_subcaso varchar(100),
   cod_medio int,
   desc_medio varchar(100),
   latitud real,
   longitud real,
   cod_tpo_via int,
   desc_tpo_via varchar(100),
   cod_via int,
   desc_via varchar(100),
   cdra varchar(4),
   numero varchar(10),
   area varchar(10),
   zona varchar(20),
   subzona varchar(20),
   cod_severidad int,
   desc_severidad varchar(50),
   cod_estado int,
   desc_estado varchar(50),
   cod_subestado int,
   desc_subestado varchar(50),
   cod_modalidad int,
   desc_modalidad varchar(50),
   cod_motivo int,
   desc_motivo varchar(1),
   tpo_hallazgo varchar(1),
   tpo_sexo varchar(1)
)
;
CREATE UNIQUE INDEX estadistica_pkey ON "histomapa"."estadistica"(id_estad)
;
CREATE TABLE "histomapa"."hist_incidencia"
(
   id_hist int PRIMARY KEY NOT NULL,
   id_incidencia int,
   cod_unidad int,
   cod_caso int,
   cod_subcaso int,
   cod_medio int,
   cod_situacion int,
   desc_unidad varchar(100),
   desc_caso varchar(100),
   desc_subcaso varchar(100),
   desc_medio varchar(100),
   desc_situacion varchar(50),
   cod_unid_report int,
   nomb_report varchar(300),
   telf_report varchar(10),
   dir_report varchar(500),
   cext_report varchar(50),
   cod_nac_report int,
   cod_geometria int,
   coordenadas varchar(200),
   cod_tpo_via int,
   desc_tpo_via varchar(50),
   desc_via varchar(100),
   cdra varchar(4),
   dpto varchar(10),
   zona varchar(20),
   subzona varchar(20),
   descripcion varchar(3100),
   fec_notificacion timestamp,
   fec_evento timestamp,
   fec_atencion timestamp,
   fec_cierre timestamp,
   cod_severidad int,
   cod_estado int,
   cod_subestado int,
   cod_modalidad int,
   cod_motivo int,
   desc_motivo varchar(100),
   tpo_hallazgo varchar(1),
   tpo_sexo varchar(1),
   est_reg varchar(1),
   nro_caso_voxiva int,
   tipo_voxiva varchar(50),
   subtipo_voxiva varchar(50),
   tiempo_cierre varchar(50),
   area varchar(8),
   cod_disp_origen int,
   desc_disp_origen varchar(50),
   flg_heridos varchar(1),
   flg_callback varchar(1),
   visible varchar(1),
   usr_registra varchar(250),
   usr_modifica varchar(250),
   ind_leido varchar(1),
   tpo_operador int,
   flg_reasignado varchar(1),
   url_audio varchar(250),
   aux1 text,
   aux2 text,
   aux3 text,
   aux4 text
)
;
CREATE UNIQUE INDEX hist_incidencia_pkey ON "histomapa"."hist_incidencia"(id_hist)
;
CREATE TABLE "histomapa"."hist_interviniente"
(
   id_hist_interv int PRIMARY KEY NOT NULL,
   id_hist int,
   cod_interv int,
   id_incidencia int,
   cod_tpo_interv int,
   cod_tpo_puesto int,
   desc_tpo_interv varchar(20),
   desc_tpo_puesto varchar(100),
   nomb_interv varchar(200),
   apoyo_policial varchar(200),
   est_reg varchar(1),
   info_interv varchar(2000)
)
;
CREATE INDEX idx_hist_interviniente_id_hist ON "histomapa"."hist_interviniente"(id_hist)
;
CREATE UNIQUE INDEX hist_interviniente_pkey ON "histomapa"."hist_interviniente"(id_hist_interv)
;
CREATE TABLE "histomapa"."hist_involucrado"
(
   id_hist_involuc int PRIMARY KEY NOT NULL,
   id_hist int,
   cod_involuc int,
   id_incidencia int,
   cod_tpo_involuc int,
   cod_tpo_doc int,
   desc_tpo_involuc varchar(50),
   desc_tpo_doc varchar(50),
   nomb_involuc varchar(200),
   edad_involuc varchar(2),
   num_doc_involuc varchar(15),
   desc_observ varchar(1000),
   cod_vehic int,
   cod_clase_vehic int,
   cod_marca_vehic int,
   cod_color_vehic int,
   clase_vehic varchar(20),
   marca_vehic varchar(20),
   model_vehic varchar(20),
   placa_vehic varchar(20),
   color_vehic varchar(20),
   anio_vehic varchar(4),
   est_reg varchar(1)
)
;
CREATE INDEX idx_hist_involucrado_id_hist ON "histomapa"."hist_involucrado"(id_hist)
;
CREATE UNIQUE INDEX hist_involucrado_pkey ON "histomapa"."hist_involucrado"(id_hist_involuc)
;
CREATE TABLE "histomapa"."hist_vehiculo"
(
   id_hist_vehic int PRIMARY KEY NOT NULL,
   id_hist int,
   cod_vehic int,
   id_incidencia int,
   cod_clase_vehic int,
   cod_marca_vehic int,
   cod_color_vehic int,
   clase_vehic varchar(20),
   marca_vehic varchar(20),
   model_vehic varchar(20),
   placa_vehic varchar(20),
   color_vehic varchar(20),
   anio_vehic varchar(4),
   est_reg varchar(1)
)
;
CREATE INDEX idx_hist_vehiculo_id_hist ON "histomapa"."hist_vehiculo"(id_hist)
;
CREATE UNIQUE INDEX hist_vehiculo_pkey ON "histomapa"."hist_vehiculo"(id_hist_vehic)
;
CREATE TABLE "histotetra"."geo_info_tetra"
(
   issi int PRIMARY KEY NOT NULL,
   id_info int,
   nro_asignacion int,
   area varchar(200),
   nro_interno varchar(500),
   tipo_vehiculo varchar(100),
   marca_vehiculo varchar(100),
   modelo_vehiculo varchar(100),
   placa char(25),
   tipo_radio varchar(50),
   modelo_radio varchar(50),
   zona varchar(30),
   sub_zona varchar(30)
)
;
CREATE UNIQUE INDEX geo_info_tetra_pkey ON "histotetra"."geo_info_tetra"(issi)
;
