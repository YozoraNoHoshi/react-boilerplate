--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: strings; Type: TABLE; Schema: public; Owner: nsena
--

CREATE TABLE public.strings (
    id integer NOT NULL,
    string text NOT NULL
);


ALTER TABLE public.strings OWNER TO nsena;

--
-- Name: strings_id_seq; Type: SEQUENCE; Schema: public; Owner: nsena
--

CREATE SEQUENCE public.strings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.strings_id_seq OWNER TO nsena;

--
-- Name: strings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nsena
--

ALTER SEQUENCE public.strings_id_seq OWNED BY public.strings.id;


--
-- Name: strings id; Type: DEFAULT; Schema: public; Owner: nsena
--

ALTER TABLE ONLY public.strings ALTER COLUMN id SET DEFAULT nextval('public.strings_id_seq'::regclass);


--
-- Data for Name: strings; Type: TABLE DATA; Schema: public; Owner: nsena
--

COPY public.strings (id, string) FROM stdin;
439	reeee
440	blegh
441	dfsdf
443	There are a lot of new things I can add
444	yo
445	nhi
446	sdsd
447	thef
448	yo wtf 
449	wat
450	okok
451	kk
452	wo
453	wot
454	sdasdasfgd
455	llll
456	bleghsfgfsgvs
457	why
458	kjkkk
\.


--
-- Name: strings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nsena
--

SELECT pg_catalog.setval('public.strings_id_seq', 458, true);


--
-- Name: strings strings_pkey; Type: CONSTRAINT; Schema: public; Owner: nsena
--

ALTER TABLE ONLY public.strings
    ADD CONSTRAINT strings_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

