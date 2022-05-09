import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submitFeedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMail-adapter';

export const routes = express.Router()

    routes.post('/feedbacks', async (req, res) => {
        const { type, comment, screenshot } = req.body;
        
        const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
        const nodemailerMailAdapter = new NodemailerMailAdapter()
        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            prismaFeedbacksRepository,
            nodemailerMailAdapter
        )

        await submitFeedbackUseCase.execute({
            type,
            comment,
            screenshot,
        })

        return res.status(201).send()
    });