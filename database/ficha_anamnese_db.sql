-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://github.com/pgadmin-org/pgadmin4/issues/new/choose if you find any bugs, including reproduction steps.
BEGIN;


ALTER TABLE IF EXISTS core.forms DROP CONSTRAINT IF EXISTS fk_core_question_id;

ALTER TABLE IF EXISTS core.forms DROP CONSTRAINT IF EXISTS fk_core_services_id;

ALTER TABLE IF EXISTS core.questions DROP CONSTRAINT IF EXISTS fk_tp_question_id;

ALTER TABLE IF EXISTS customer.form DROP CONSTRAINT IF EXISTS fk_core_question_id;

ALTER TABLE IF EXISTS customer.form DROP CONSTRAINT IF EXISTS fk_core_service_id;

ALTER TABLE IF EXISTS customer.form DROP CONSTRAINT IF EXISTS fk_customer_data_id;

ALTER TABLE IF EXISTS customer.service DROP CONSTRAINT IF EXISTS fk_core_service_id;

ALTER TABLE IF EXISTS customer.service DROP CONSTRAINT IF EXISTS fk_data_customer_id;



DROP TABLE IF EXISTS core.forms;

CREATE TABLE IF NOT EXISTS core.forms
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    service_id integer,
    question_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT form_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS core.questions;

CREATE TABLE IF NOT EXISTS core.questions
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    question character(255) COLLATE pg_catalog."default",
    tp_question_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT questions_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS core.services;

CREATE TABLE IF NOT EXISTS core.services
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    service_name character(150) COLLATE pg_catalog."default",
    value numeric(10, 2),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT service_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS core.type_questions;

CREATE TABLE IF NOT EXISTS core.type_questions
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    type_name character(50) COLLATE pg_catalog."default",
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT type_questions_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS core.users;

CREATE TABLE IF NOT EXISTS core.users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    username character(100) COLLATE pg_catalog."default",
    role character(150) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS customer.data;

CREATE TABLE IF NOT EXISTS customer.data
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    first_name character(255) COLLATE pg_catalog."default",
    last_name character(255) COLLATE pg_catalog."default",
    age integer,
    birthdate date DEFAULT CURRENT_DATE,
    marital_status character(50) COLLATE pg_catalog."default",
    phone character(30) COLLATE pg_catalog."default",
    mobile character(30) COLLATE pg_catalog."default",
    email character(150) COLLATE pg_catalog."default",
    facebook character(50) COLLATE pg_catalog."default",
    instagram character(50) COLLATE pg_catalog."default",
    profession character(150) COLLATE pg_catalog."default",
    address_line1 character(255) COLLATE pg_catalog."default",
    address_line2 character(255) COLLATE pg_catalog."default",
    state character(100) COLLATE pg_catalog."default",
    province character(150) COLLATE pg_catalog."default",
    zipcode character(10) COLLATE pg_catalog."default",
    country character(150) COLLATE pg_catalog."default",
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT data_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS customer.form;

CREATE TABLE IF NOT EXISTS customer.form
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    customer_id integer,
    service_id integer,
    question_id integer,
    yes_no boolean,
    long_answer character(255) COLLATE pg_catalog."default",
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT form_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS customer.service;

CREATE TABLE IF NOT EXISTS customer.service
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    customer_id integer,
    service_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT service_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS core.forms
    ADD CONSTRAINT fk_core_question_id FOREIGN KEY (question_id)
    REFERENCES core.questions (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS fki_fk_core_question_id
    ON core.forms(question_id);


ALTER TABLE IF EXISTS core.forms
    ADD CONSTRAINT fk_core_services_id FOREIGN KEY (service_id)
    REFERENCES core.services (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS fki_fk_core_services_id
    ON core.forms(service_id);


ALTER TABLE IF EXISTS core.questions
    ADD CONSTRAINT fk_tp_question_id FOREIGN KEY (tp_question_id)
    REFERENCES core.type_questions (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS fki_fk_tp_question_id
    ON core.questions(tp_question_id);


ALTER TABLE IF EXISTS customer.form
    ADD CONSTRAINT fk_core_question_id FOREIGN KEY (question_id)
    REFERENCES core.questions (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS fki_fk_core_question_id
    ON customer.form(question_id);


ALTER TABLE IF EXISTS customer.form
    ADD CONSTRAINT fk_core_service_id FOREIGN KEY (service_id)
    REFERENCES core.services (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS fki_fk_core_service_id
    ON customer.form(service_id);


ALTER TABLE IF EXISTS customer.form
    ADD CONSTRAINT fk_customer_data_id FOREIGN KEY (customer_id)
    REFERENCES customer.data (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS fki_fk_customer_data_id
    ON customer.form(customer_id);


ALTER TABLE IF EXISTS customer.service
    ADD CONSTRAINT fk_core_service_id FOREIGN KEY (service_id)
    REFERENCES core.services (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;


ALTER TABLE IF EXISTS customer.service
    ADD CONSTRAINT fk_data_customer_id FOREIGN KEY (customer_id)
    REFERENCES customer.data (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS fki_fk_data_customer_id
    ON customer.service(customer_id);

END;