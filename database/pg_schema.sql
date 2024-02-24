--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: core; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA core;


ALTER SCHEMA core OWNER TO postgres;

--
-- Name: customer; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA customer;


ALTER SCHEMA customer OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: forms; Type: TABLE; Schema: core; Owner: postgres
--

CREATE TABLE core.forms (
    id integer NOT NULL,
    service_id integer,
    question_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE core.forms OWNER TO postgres;

--
-- Name: form_id_seq; Type: SEQUENCE; Schema: core; Owner: postgres
--

ALTER TABLE core.forms ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME core.form_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: questions; Type: TABLE; Schema: core; Owner: postgres
--

CREATE TABLE core.questions (
    id integer NOT NULL,
    question character(255),
    tp_question_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE core.questions OWNER TO postgres;

--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: core; Owner: postgres
--

ALTER TABLE core.questions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME core.questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: services; Type: TABLE; Schema: core; Owner: postgres
--

CREATE TABLE core.services (
    id integer NOT NULL,
    service_name character(150),
    value numeric(10,2),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE core.services OWNER TO postgres;

--
-- Name: service_id_seq; Type: SEQUENCE; Schema: core; Owner: postgres
--

ALTER TABLE core.services ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME core.service_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: type_questions; Type: TABLE; Schema: core; Owner: postgres
--

CREATE TABLE core.type_questions (
    id integer NOT NULL,
    type_name character(50),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE core.type_questions OWNER TO postgres;

--
-- Name: type_questions_id_seq; Type: SEQUENCE; Schema: core; Owner: postgres
--

ALTER TABLE core.type_questions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME core.type_questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: core; Owner: postgres
--

CREATE TABLE core.users (
    id integer NOT NULL,
    username character(100),
    role character(150)
);


ALTER TABLE core.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: core; Owner: postgres
--

ALTER TABLE core.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME core.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: data; Type: TABLE; Schema: customer; Owner: postgres
--

CREATE TABLE customer.data (
    id integer NOT NULL,
    first_name character(255),
    last_name character(255),
    age integer,
    birthdate date DEFAULT CURRENT_DATE,
    marital_status character(50),
    phone character(30),
    mobile character(30),
    email character(150),
    facebook character(50),
    instagram character(50),
    profession character(150),
    address_line1 character(255),
    address_line2 character(255),
    state character(100),
    province character(150),
    zipcode character(10),
    country character(150),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE customer.data OWNER TO postgres;

--
-- Name: data_id_seq; Type: SEQUENCE; Schema: customer; Owner: postgres
--

ALTER TABLE customer.data ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME customer.data_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: form; Type: TABLE; Schema: customer; Owner: postgres
--

CREATE TABLE customer.form (
    id integer NOT NULL,
    customer_id integer,
    service_id integer,
    question_id integer,
    yes_no boolean,
    long_answer character(255),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE customer.form OWNER TO postgres;

--
-- Name: form_id_seq; Type: SEQUENCE; Schema: customer; Owner: postgres
--

ALTER TABLE customer.form ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME customer.form_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: service; Type: TABLE; Schema: customer; Owner: postgres
--

CREATE TABLE customer.service (
    id integer NOT NULL,
    customer_id integer,
    service_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE customer.service OWNER TO postgres;

--
-- Name: service_id_seq; Type: SEQUENCE; Schema: customer; Owner: postgres
--

ALTER TABLE customer.service ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME customer.service_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: forms form_pkey; Type: CONSTRAINT; Schema: core; Owner: postgres
--

ALTER TABLE ONLY core.forms
    ADD CONSTRAINT form_pkey PRIMARY KEY (id);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: core; Owner: postgres
--

ALTER TABLE ONLY core.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- Name: services service_pkey; Type: CONSTRAINT; Schema: core; Owner: postgres
--

ALTER TABLE ONLY core.services
    ADD CONSTRAINT service_pkey PRIMARY KEY (id);


--
-- Name: type_questions type_questions_pkey; Type: CONSTRAINT; Schema: core; Owner: postgres
--

ALTER TABLE ONLY core.type_questions
    ADD CONSTRAINT type_questions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: core; Owner: postgres
--

ALTER TABLE ONLY core.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: data data_pkey; Type: CONSTRAINT; Schema: customer; Owner: postgres
--

ALTER TABLE ONLY customer.data
    ADD CONSTRAINT data_pkey PRIMARY KEY (id);


--
-- Name: form form_pkey; Type: CONSTRAINT; Schema: customer; Owner: postgres
--

ALTER TABLE ONLY customer.form
    ADD CONSTRAINT form_pkey PRIMARY KEY (id);


--
-- Name: service service_pkey; Type: CONSTRAINT; Schema: customer; Owner: postgres
--

ALTER TABLE ONLY customer.service
    ADD CONSTRAINT service_pkey PRIMARY KEY (id);


--
-- Name: fki_fk_core_question_id; Type: INDEX; Schema: core; Owner: postgres
--

CREATE INDEX fki_fk_core_question_id ON core.forms USING btree (question_id);


--
-- Name: fki_fk_core_services_id; Type: INDEX; Schema: core; Owner: postgres
--

CREATE INDEX fki_fk_core_services_id ON core.forms USING btree (service_id);


--
-- Name: fki_fk_tp_question_id; Type: INDEX; Schema: core; Owner: postgres
--

CREATE INDEX fki_fk_tp_question_id ON core.questions USING btree (tp_question_id);


--
-- Name: fki_fk_core_question_id; Type: INDEX; Schema: customer; Owner: postgres
--

CREATE INDEX fki_fk_core_question_id ON customer.form USING btree (question_id);


--
-- Name: fki_fk_core_service_id; Type: INDEX; Schema: customer; Owner: postgres
--

CREATE INDEX fki_fk_core_service_id ON customer.form USING btree (service_id);


--
-- Name: fki_fk_customer_data_id; Type: INDEX; Schema: customer; Owner: postgres
--

CREATE INDEX fki_fk_customer_data_id ON customer.form USING btree (customer_id);


--
-- Name: fki_fk_data_customer_id; Type: INDEX; Schema: customer; Owner: postgres
--

CREATE INDEX fki_fk_data_customer_id ON customer.service USING btree (customer_id);


--
-- Name: forms fk_core_question_id; Type: FK CONSTRAINT; Schema: core; Owner: postgres
--

ALTER TABLE ONLY core.forms
    ADD CONSTRAINT fk_core_question_id FOREIGN KEY (question_id) REFERENCES core.questions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: forms fk_core_services_id; Type: FK CONSTRAINT; Schema: core; Owner: postgres
--

ALTER TABLE ONLY core.forms
    ADD CONSTRAINT fk_core_services_id FOREIGN KEY (service_id) REFERENCES core.services(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: questions fk_tp_question_id; Type: FK CONSTRAINT; Schema: core; Owner: postgres
--

ALTER TABLE ONLY core.questions
    ADD CONSTRAINT fk_tp_question_id FOREIGN KEY (tp_question_id) REFERENCES core.type_questions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: form fk_core_question_id; Type: FK CONSTRAINT; Schema: customer; Owner: postgres
--

ALTER TABLE ONLY customer.form
    ADD CONSTRAINT fk_core_question_id FOREIGN KEY (question_id) REFERENCES core.questions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: form fk_core_service_id; Type: FK CONSTRAINT; Schema: customer; Owner: postgres
--

ALTER TABLE ONLY customer.form
    ADD CONSTRAINT fk_core_service_id FOREIGN KEY (service_id) REFERENCES core.services(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: service fk_core_service_id; Type: FK CONSTRAINT; Schema: customer; Owner: postgres
--

ALTER TABLE ONLY customer.service
    ADD CONSTRAINT fk_core_service_id FOREIGN KEY (service_id) REFERENCES core.services(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: form fk_customer_data_id; Type: FK CONSTRAINT; Schema: customer; Owner: postgres
--

ALTER TABLE ONLY customer.form
    ADD CONSTRAINT fk_customer_data_id FOREIGN KEY (customer_id) REFERENCES customer.data(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: service fk_data_customer_id; Type: FK CONSTRAINT; Schema: customer; Owner: postgres
--

ALTER TABLE ONLY customer.service
    ADD CONSTRAINT fk_data_customer_id FOREIGN KEY (customer_id) REFERENCES customer.data(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

