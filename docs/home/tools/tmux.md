---
title: Tmux
sidebar_position: 6
description: tmux, the terminal multiplexer.
---

## Introduction
- tmux, the terminal multiplexer, makes running simultaneous tasks throughout a pentest incredibly easy.
- To install tmux, use the below command
  ```
    sudo apt install tmux
  ```

## Sessions
- `tmux` or `tmux new` or `tmux new-session` - Create new session with default name.
- `tmux new -S <SESSION_NAME>` - Create a new session with session name.
- `tmux a` or `tmux att` or `tmux attach` or `tmux attach-session` - Attach to the default session.
- `tmux a -t <SESSION_NAME>` - Attach to a session with session name.
- `tmux kill-ses` - Removes the default session.
- `tmux kill-session -t <SESSION_NAME>` - Kills the session with session name.

### Session Keybindings
- `Ctrl+B $` - Rename session.
- `Ctrl+B D` - Detach session.
- `Ctrl+B )` - Next session.
- `Ctrl+B (` - Previous session.

## Windows
- Windows are like tabs in browsers. Windows exist in sessions and occupy a space of the session screen.

### Window Keybindings
- `Ctrl+B C` - Create window.
- `Ctrl+B N` - Move to next window.
- `Ctrl+B P` - Move to previous window.
- `Ctrl+B L` - Move to last used window.
- `Ctrl+B 0-9` - Select window by number.
- `Ctrl+B '` - Select window by name.
- `Ctrl+B .` - Change window number.
- `Ctrl+B ,` - Rename window.
- `Ctrl+B F` - Search window.
- `Ctrl+B &` - Kill window.
- `Ctrl+B W` - List windows.

## Panes
- Panes are sections of windows that have been split into different screens.

### Pane Keybindings
- `Ctrl+B %` - Vertical split.
- `Ctrl+B "` - Horizontal split.
- `Ctrl+B RIGHT_ARROW` - Move to the right pane.
- `Ctrl+B LEFT_ARROW` - Move to the left pane.
- `Ctrl+B UP_ARROW` - Move to the above pane.
- `Ctrl+B DOWN_ARROW` - Move to the below pane.
- `Ctrl+B O` - Go to the next pane.
- `Ctrl+B ;` - Go to last active pane.
- `Ctrl+B }` - Move pane right.
- `Ctrl+B {` - Move pane left.
- `Ctrl+B !` - Convert pane to window.
- `Ctrl+B X` - Kill pane.

## Copy Mode
- Copy mode is for copying and pasting text in tmux.

### Copy Mode Keybindings
- `Ctrl+B [` - Enter Copy Mode.
- `Ctrl+B ]` - Paste from Buffer.
- `Space` - Start selection.
- `Enter` - Copy selection.
- `Esc` - Clear selection.
- `g` - Go to top.
- `G` - Go to bottom.
- `h` - Move cursor left.
- `j` - Move cursor down.
- `k` - Move cursor up.
- `l` - Move cursor right.
- `/` - Search.
- `#` - List paste buffers.
- `q` - Quit.

Cheatsheet link: https://imgur.com/bL9Dn3U