'use client';
import { useParams, useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import React from 'react';
import css from './NotePreview.module.css';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

const NotePreviewClient = () => {
	const router = useRouter();
	const id = Number(useParams<{ id: string }>().id);
	const closeModal = () => {
		router.back();
	};

	const {
		data: note,
		isLoading,
		error,
		isSuccess,
		isError,
	} = useQuery({
		queryKey: ['note', id],
		queryFn: () => fetchNoteById(id),
		refetchOnMount: false,
	});

	return (
		<Modal onClose={closeModal}>
			{!error && !note && !isLoading && <p className={css.errorMessage}>Not found</p>}
			{isError && <p className={css.errorMessage}>Not found</p>}
			{note && isSuccess && (
				<div className={css.container}>
					<div className={css.item}>
						<div className={css.header}>
							<h2>{note.title}</h2>
							<button className={css.backBtn} onClick={closeModal}>
								Back
							</button>
						</div>
						<p className={css.content}>{note.content}</p>
						<p className={css.tag}>{note.tag}</p>
						<p className={css.date}>
							{note.updatedAt ? `Updated at: ${note.updatedAt}` : `Created at: ${note.createdAt}`}
						</p>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default NotePreviewClient;