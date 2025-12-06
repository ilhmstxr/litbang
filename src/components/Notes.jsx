import React, { useState, useEffect } from 'react';
import { PenTool, Plus, X, Trash2, StickyNote, Minimize2, Save } from 'lucide-react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newNote, setNewNote] = useState('');

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('litbang_notes');
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (e) {
        console.error("Failed to parse notes", e);
      }
    }
  }, []);

  // Save to LocalStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('litbang_notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!newNote.trim()) return;
    const note = {
      id: Date.now(),
      text: newNote,
      color: ['bg-yellow-200', 'bg-blue-200', 'bg-pink-200', 'bg-green-200'][Math.floor(Math.random() * 4)],
      rotation: Math.random() * 6 - 3 // Random rotation -3 to 3 deg
    };
    setNotes([note, ...notes]);
    setNewNote('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <>
        {/* Toggle Button (Bottom Left) */}
        {!isOpen && (
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-24 md:left-32 z-40 bg-white text-black p-4 rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95 group"
                title="Open Notes"
            >
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <PenTool size={24} />
            </button>
        )}

        {/* Notes Overlay/Window */}
        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                <div className="w-full max-w-4xl h-[80vh] bg-neutral-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative">
                    
                    {/* Header */}
                    <div className="p-6 border-b border-white/10 flex justify-between items-center bg-neutral-900 z-10">
                        <div>
                            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                                IDEA<span className="text-primary not-italic">.</span>BOX
                            </h2>
                            <p className="text-neutral-400 text-sm font-mono">Tulis ide liarmu di sini. Tersimpan otomatis.</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content Area (Scrollable) */}
                    <div className="flex-1 overflow-y-auto p-8 relative">
                         {/* Background Grid Pattern */}
                         <div className="absolute inset-0 opacity-10 pointer-events-none" 
                              style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                         </div>

                         {/* Notes Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Input Card */}
                            <div className="aspect-video bg-white/5 border-2 border-dashed border-white/20 rounded-xl p-6 flex flex-col justify-center items-center hover:bg-white/10 transition-colors group">
                                <textarea 
                                    className="w-full h-full bg-transparent resize-none text-white placeholder-neutral-500 outline-none text-lg font-bold text-center"
                                    placeholder="Type something amazing..."
                                    value={newNote}
                                    onChange={(e) => setNewNote(e.target.value)}
                                    onKeyDown={(e) => {
                                        if(e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            addNote();
                                        }
                                    }}
                                ></textarea>
                                <button 
                                    onClick={addNote}
                                    disabled={!newNote.trim()}
                                    className="mt-4 flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full font-bold uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                                >
                                    <Plus size={16} /> Add Note
                                </button>
                            </div>

                            {/* Render Notes */}
                            {notes.map(note => (
                                <div 
                                    key={note.id} 
                                    className={`relative p-6 rounded-xl text-black shadow-lg transform transition-all hover:scale-[1.02] hover:z-10 cursor-move group ${note.color}`}
                                    style={{ transform: `rotate(${note.rotation}deg)` }}
                                >
                                    <div className="font-handwriting text-lg font-bold leading-snug break-words whitespace-pre-wrap">
                                        {note.text}
                                    </div>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                                        <button 
                                            onClick={() => deleteNote(note.id)}
                                            className="p-2 bg-black/10 hover:bg-red-500 hover:text-white rounded-full transition-colors"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-3 right-4 opacity-40 text-[10px] font-mono font-bold uppercase tracking-widest">
                                        Litbang Note
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="p-4 bg-black text-neutral-500 text-xs font-mono text-center border-t border-white/10">
                        {notes.length} notes saved locally
                    </div>
                </div>
            </div>
        )}
    </>
  );
};

export default Notes;
