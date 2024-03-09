import { Request, Response } from 'express';

export const generateContent = async (req: Request, res: Response) => {
	const { prompt } = await req.body;
    
};
